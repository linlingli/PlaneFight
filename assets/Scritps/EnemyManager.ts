import { _decorator, Component, instantiate, math, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {

    @property
    enemy0SpawnRate: number = 1
    @property(Prefab)
    enemy0Prefab: Prefab = null

    @property
    enemy1SpawnRate: number = 3
    @property(Prefab)
    enemy1Prefab: Prefab = null

    @property
    enemy2SpawnRate: number = 10
    @property(Prefab)
    enemy2Prefab: Prefab = null

    @property
    rewardSpawnRate: number = 15
    @property(Prefab)
    reward1Prefab: Prefab = null
    @property(Prefab)
    reward2Prefab: Prefab = null

    start() {
        // 設置定時器(調用方法,間隔時間)
        this.schedule(this.enemy0Spawn, this.enemy0SpawnRate)
        this.schedule(this.enemy1Spawn, this.enemy1SpawnRate)
        this.schedule(this.enemy2Spawn, this.enemy2SpawnRate)
        this.schedule(this.rewardSpawn, this.rewardSpawnRate)
    }

    update(deltaTime: number) {

    }

    protected onDestroy(): void {
        // 銷毀定時器
        this.unschedule(this.enemy0Spawn)
        this.unschedule(this.enemy1Spawn)
        this.unschedule(this.enemy2Spawn)
        this.unschedule(this.rewardSpawn)
    }

    enemy0Spawn() {
        this.objectSpawn(this.enemy0Prefab, -215, 215, 450)
    }

    enemy1Spawn() {
        this.objectSpawn(this.enemy1Prefab, -200, 200, 475)
    }

    enemy2Spawn() {
        this.objectSpawn(this.enemy2Prefab, -155, 155, 560)
    }

    rewardSpawn() {
        const randomNumber = math.randomRangeInt(0, 2) // 包含0 不包含2  0,1
        let prefab = null
        if (randomNumber === 0) {
            prefab = this.reward1Prefab
        } else {
            prefab = this.reward2Prefab
        }
        this.objectSpawn(prefab, -207, 207, 474)
    }

    objectSpawn(objPrefab: Prefab, mixX: number, maxX: number, Y: number) {
        const enemy = instantiate(objPrefab) // 實例化enemy
        this.node.addChild(enemy) // 添加到場景當中
        // 隨機設置位置 x軸：-200 ~ 200 y軸保持不變
        const randomX = math.randomRangeInt(mixX, maxX)
        enemy.setPosition(randomX, Y, 0)
    }
}

