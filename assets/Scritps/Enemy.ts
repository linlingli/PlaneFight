import { _decorator, Animation, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, Sprite } from 'cc';
import { Bullet } from './Bullet';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {

    @property
    speed: number = 300

    @property(Animation)
    anim: Animation = null

    @property
    hp: number = 1

    @property
    animHit: string = ""
    @property
    animDown: string = ""

    @property
    score:number = 100

    collider: Collider2D = null

    start() {
        //   this.anim.play()

        // 註冊單個碰撞體的回調函數
        this.collider = this.getComponent(Collider2D)
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
        }
    }

    update(deltaTime: number) {
        if (this.hp > 0) {
            const p = this.node.position // 得到敵機當前坐標
            this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z) // 控制敵機向下移動
        }
        if (this.node.position.y < -580) {  // 敵機超出邊界外則銷毀自身
            this.node.destroy()
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.getComponent(Bullet)) { // 如果是Bullet腳本才禁用Collider
            otherCollider.enabled = false // 禁用碰撞體防止重複觸發碰撞事件
            otherCollider.getComponent(Sprite).enabled = false // 禁用Sprite防止顯示
        }
        this.hp -= 1
        if (this.hp > 0) {
            this.anim.play(this.animHit)
        } else {
            this.anim.play(this.animDown)
        }

        if (this.hp <= 0) { // 如果敵機血量小於等於0，則銷毀自身
            GameManager.getInstance().addScore(this.score)
            if (this.collider) {  // 禁用collider防止重複觸發死亡事件
                this.collider.enabled = false
            }
            this.scheduleOnce(function () { // 延遲1秒鐘銷毀自身
                this.node.destroy()
            }, 1)
        }
    }

    protected onDestroy(): void {
        // 註銷單個碰撞體的回調函數
        if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
        }
    }

}

