import { _decorator, Animation, Collider2D, Component, Contact2DType, EventTouch, Input, input, instantiate, IPhysics2DContact, Node, Prefab, Sprite, Vec3 } from 'cc';
import { Reward, RewardType } from './Reward';
import { GameManager } from './GameManager';
import { LifeCountUI } from './UI/LifeCountUI';
const { ccclass, property } = _decorator;

enum ShootType {
    None,
    OneShoot,
    TwoShoot
}

@ccclass('Player')
export class Player extends Component {

    @property
    shootRate: number = 0.5 //多少秒發射一次子彈
    shootTimer: number = 0

    @property(Node)
    bulletParent: Node = null
    @property(Prefab)
    bullet1Prefab: Prefab = null
    @property(Node)
    position1: Node = null

    @property(Prefab)
    bullet2Prefab: Prefab = null
    @property(Node)
    position2: Node = null
    @property(Node)
    position3: Node = null

    @property({ type: ShootType })
    shootType: ShootType = ShootType.OneShoot; // 默認一發類型

    @property
    lifeCoount: number = 3

    @property(Animation)
    anim: Animation = null
    @property
    animHit: string = ''
    @property
    animDown: string = ''

    @property
    invincibleTime: number = 1
    invincibleTimer: number = 0
    isInvincible: boolean = false

    @property
    twoShootTime: number = 5
    twoShootTimer: number = 0
    isTwoShoot: boolean = false

    @property(LifeCountUI)
    lifeCountUI: LifeCountUI = null

    collider: Collider2D = null
    private canControl: boolean = true

    protected onLoad(): void {
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.collider = this.getComponent(Collider2D)
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
        }
    }
    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
        if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
        }
    }

    onTouchMove(event: EventTouch) {
        if (!this.canControl) return
        if (this.lifeCoount < 1) return
        const p = this.node.position
        let targetPosition = new Vec3(p.x + event.getDeltaX(), p.y + event.getDeltaY(), p.z)
        if (targetPosition.x < -230) {
            targetPosition.x = -230
        }
        if (targetPosition.x > 230) {
            targetPosition.x = 230
        }
        if (targetPosition.y > 380) {
            targetPosition.y = 380
        }
        if (targetPosition.y < - 380) {
            targetPosition.y = -380
        }
        this.node.setPosition(targetPosition)
    }
    protected start(): void {
        this.lifeCountUI.updateUI(this.lifeCoount)
    }

    protected update(dt: number): void {
        switch (this.shootType) {
            case ShootType.OneShoot:
                this.oneShoot(dt)
                break;
            case ShootType.TwoShoot:
                this.twoShoot(dt)
                break;
        }

        if (this.isInvincible) {
            this.invincibleTimer += dt
            if (this.invincibleTimer >= this.invincibleTime) {
                this.isInvincible = false
            }
        }
    }
    transitionToTwoShootType() {
        this.shootType = ShootType.TwoShoot
        this.twoShootTimer = 0
    }
    transitionToOneShootType() {
        this.shootType = ShootType.OneShoot
    }
    oneShoot(dt: number) {
        this.shootTimer += dt
        if (this.shootTimer >= this.shootRate) {
            this.shootTimer = 0
            const bullet1 = instantiate(this.bullet1Prefab)
            this.bulletParent.addChild(bullet1)
            bullet1.setWorldPosition(this.position1.worldPosition)
        }
    }
    twoShoot(dt: number) {
        this.twoShootTimer += dt
        if (this.twoShootTimer >= this.twoShootTime) {
            this.transitionToOneShootType()
        }
        this.shootTimer += dt
        if (this.shootTimer >= this.shootRate) {
            this.shootTimer = 0
            const bullet1 = instantiate(this.bullet2Prefab)
            const bullet2 = instantiate(this.bullet2Prefab)
            this.bulletParent.addChild(bullet1)
            this.bulletParent.addChild(bullet2)
            bullet1.setWorldPosition(this.position2.worldPosition)
            bullet2.setWorldPosition(this.position3.worldPosition)
        }
    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        const reward = otherCollider.getComponent(Reward)
        if (reward) {
            this.onContactToReward(reward)
        } else {
            this.onContactToEnemy()
        }

    }
    lestReward: Reward = null
    onContactToReward(reward: Reward) {
        if (reward === this.lestReward) return
        this.lestReward = reward
        switch (reward.rewardType) {
            case RewardType.TwoShoot:
                this.transitionToTwoShootType()
                break;
            case RewardType.Bomb:
                GameManager.getInstance().AddBomb()
                break;
        }
        reward.getComponent(Collider2D).enabled = false // 禁用Collider防止跟其他物體碰撞
        reward.getComponent(Sprite).enabled = false // 禁用Sprite防止顯示
    }
    onContactToEnemy() {
        if (this.isInvincible) return // 如果玩家處於無敵狀態，則不執行碰撞邏輯
        this.isInvincible = true
        this.invincibleTimer = 0

        this.changeLifeCount(-1)
        if (this.lifeCoount > 0) {
            this.anim.play(this.animHit)
        } else {
            this.anim.play(this.animDown)
        }

        if (this.lifeCoount <= 0) { // 如果敵機血量小於等於0，則銷毀自身
            this.shootType = ShootType.None
            if (this.collider) {  // 禁用collider防止重複觸發死亡事件
                this.collider.enabled = false
            }
            this.scheduleOnce(() => {
                GameManager.getInstance().gameOver()
            }, 1) // 延遲1秒播放完動畫再結束遊戲
        }
    }
    changeLifeCount(count: number) {
        this.lifeCoount += count
        this.lifeCountUI.updateUI(this.lifeCoount)
    }
    disableControl() {
        this.canControl = false
    }
    enableControl() {
        this.canControl = true
    }
}

