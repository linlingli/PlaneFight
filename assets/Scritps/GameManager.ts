import { _decorator, Component, director, Node } from 'cc';
import { BombUI } from './UI/BombUI';
import { ScoreUI } from './UI/ScoreUI';
import { Player } from './Player';
import { GameOverUI } from './UI/GameOverUI';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    // 單例模式
    private static instance: GameManager
    public static getInstance(): GameManager {
        return this.instance;
    }

    @property
    private bombNumber: number = 0;
    @property(BombUI)
    bombUI:BombUI = null

    @property(ScoreUI)
    scoreUI:ScoreUI = null

    @property
    private score:number = 0 // 不經由代碼修改

    @property(Player)
    player:Player = null

    @property(Node)
    pauseButtonNode:Node = null
    @property(Node)
    resumeButtonNode:Node = null

    @property(GameOverUI)
    gameOveerUI:GameOverUI = null

    protected onLoad(): void { // 初始化 更早於start的生命週期
        GameManager.instance = this;
    }

    start() {

    }

    update(deltaTime: number) {

    }

    public AddBomb() {
        this.bombNumber++;
        this.bombUI.updateUI(this.bombNumber)
    }
    public GetBombNumber():number{
        return this.bombNumber
    }
    public addScore(s:number){
        this.score+=s
        this.scoreUI.updateUI(this.score)
    }

    onPauseButtonClick(){
        director.pause() // update方法不再執行  沒有新的幀時間產生
        this.player.disableControl()
        this.pauseButtonNode.active = false
        this.resumeButtonNode.active = true
    }
    onResumeButtonClick(){
        director.resume()
        this.player.enableControl()
        this.pauseButtonNode.active = true
        this.resumeButtonNode.active = false
    }
    gameOver(){ // 顯示game over ui 更新分數
        director.pause()

        let hScore = localStorage.getItem("HighestScore")
        let hScoreInt = 0

        if(hScore !== null){
            hScoreInt = parseInt(hScore,10)
        }
        if(this.score>hScoreInt){
            localStorage.setItem("HighestScore",this.score.toString())
        }
        this.gameOveerUI.showGameOverUI(hScoreInt,this.score)
    }
    onRestartButtonClick(){
        this.onResumeButtonClick()
        director.loadScene(director.getScene().name)
    }
}

