System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, BombUI, ScoreUI, Player, GameOverUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBombUI(extras) {
    _reporterNs.report("BombUI", "./UI/BombUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreUI(extras) {
    _reporterNs.report("ScoreUI", "./UI/ScoreUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameOverUI(extras) {
    _reporterNs.report("GameOverUI", "./UI/GameOverUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BombUI = _unresolved_2.BombUI;
    }, function (_unresolved_3) {
      ScoreUI = _unresolved_3.ScoreUI;
    }, function (_unresolved_4) {
      Player = _unresolved_4.Player;
    }, function (_unresolved_5) {
      GameOverUI = _unresolved_5.GameOverUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7156evGy9lHK4aTzH9VA6mv", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(_crd && BombUI === void 0 ? (_reportPossibleCrUseOfBombUI({
        error: Error()
      }), BombUI) : BombUI), _dec3 = property(_crd && ScoreUI === void 0 ? (_reportPossibleCrUseOfScoreUI({
        error: Error()
      }), ScoreUI) : ScoreUI), _dec4 = property(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(_crd && GameOverUI === void 0 ? (_reportPossibleCrUseOfGameOverUI({
        error: Error()
      }), GameOverUI) : GameOverUI), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bombNumber", _descriptor, this);

          _initializerDefineProperty(this, "bombUI", _descriptor2, this);

          _initializerDefineProperty(this, "scoreUI", _descriptor3, this);

          _initializerDefineProperty(this, "score", _descriptor4, this);

          // 不經由代碼修改
          _initializerDefineProperty(this, "player", _descriptor5, this);

          _initializerDefineProperty(this, "pauseButtonNode", _descriptor6, this);

          _initializerDefineProperty(this, "resumeButtonNode", _descriptor7, this);

          _initializerDefineProperty(this, "gameOveerUI", _descriptor8, this);
        }

        static getInstance() {
          return this.instance;
        }

        onLoad() {
          // 初始化 更早於start的生命週期
          GameManager.instance = this;
        }

        start() {}

        update(deltaTime) {}

        AddBomb() {
          this.bombNumber++;
          this.bombUI.updateUI(this.bombNumber);
        }

        GetBombNumber() {
          return this.bombNumber;
        }

        addScore(s) {
          this.score += s;
          this.scoreUI.updateUI(this.score);
        }

        onPauseButtonClick() {
          director.pause(); // update方法不再執行  沒有新的幀時間產生

          this.player.disableControl();
          this.pauseButtonNode.active = false;
          this.resumeButtonNode.active = true;
        }

        onResumeButtonClick() {
          director.resume();
          this.player.enableControl();
          this.pauseButtonNode.active = true;
          this.resumeButtonNode.active = false;
        }

        gameOver() {
          // 顯示game over ui 更新分數
          director.pause();
          var hScore = localStorage.getItem("HighestScore");
          var hScoreInt = 0;

          if (hScore !== null) {
            hScoreInt = parseInt(hScore, 10);
          }

          if (this.score > hScoreInt) {
            localStorage.setItem("HighestScore", this.score.toString());
          }

          this.gameOveerUI.showGameOverUI(hScoreInt, this.score);
        }

        onRestartButtonClick() {
          this.onResumeButtonClick();
          director.loadScene(director.getScene().name);
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bombNumber", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bombUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "score", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pauseButtonNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resumeButtonNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameOveerUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b75c0d8bd1fbe2953a432edb064e75db0899ed9.js.map