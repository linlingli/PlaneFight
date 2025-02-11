System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Collider2D, Component, Contact2DType, Sprite, Bullet, GameManager, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f625fSL5wFNHZG1y7i+WUyn", "Enemy", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Collider2D', 'Component', 'Contact2DType', 'IPhysics2DContact', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property(Animation), _dec(_class = (_class2 = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "anim", _descriptor2, this);

          _initializerDefineProperty(this, "hp", _descriptor3, this);

          _initializerDefineProperty(this, "animHit", _descriptor4, this);

          _initializerDefineProperty(this, "animDown", _descriptor5, this);

          _initializerDefineProperty(this, "score", _descriptor6, this);

          this.collider = null;
        }

        start() {
          //   this.anim.play()
          // 註冊單個碰撞體的回調函數
          this.collider = this.getComponent(Collider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        update(deltaTime) {
          if (this.hp > 0) {
            const p = this.node.position; // 得到敵機當前坐標

            this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z); // 控制敵機向下移動
          }

          if (this.node.position.y < -580) {
            // 敵機超出邊界外則銷毀自身
            this.node.destroy();
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)) {
            // 如果是Bullet腳本才禁用Collider
            otherCollider.enabled = false; // 禁用碰撞體防止重複觸發碰撞事件

            otherCollider.getComponent(Sprite).enabled = false; // 禁用Sprite防止顯示
          }

          this.hp -= 1;

          if (this.hp > 0) {
            this.anim.play(this.animHit);
          } else {
            this.anim.play(this.animDown);
          }

          if (this.hp <= 0) {
            // 如果敵機血量小於等於0，則銷毀自身
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).getInstance().addScore(this.score);

            if (this.collider) {
              // 禁用collider防止重複觸發死亡事件
              this.collider.enabled = false;
            }

            this.scheduleOnce(function () {
              // 延遲1秒鐘銷毀自身
              this.node.destroy();
            }, 1);
          }
        }

        onDestroy() {
          // 註銷單個碰撞體的回調函數
          if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 300;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hp", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animHit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "animDown", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "score", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad98c8e48593630bad33eb6992869c401f2afcaf.js.map