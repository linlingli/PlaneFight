import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum RewardType{
    TwoShoot,
    Bomb
}

@ccclass('Reward')
export class Reward extends Component {

    @property
    rewardType: RewardType = RewardType.TwoShoot

    @property
    speed: number = 90

    start() {

    }

    update(deltaTime: number) {
        const p = this.node.position // 得到獎品當前坐標
        this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z) // 控制獎品向下移動

        if (this.node.position.y < -580) {  // 獎品超出邊界外則銷毀自身
            this.node.destroy()
        }
    }
}

