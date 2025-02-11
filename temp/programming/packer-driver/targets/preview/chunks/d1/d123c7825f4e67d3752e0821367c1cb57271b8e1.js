System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Collider2D, Component, Contact2DType, Input, input, instantiate, Node, Prefab, Sprite, Vec3, Reward, RewardType, GameManager, LifeCountUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, ShootType, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReward(extras) {
    _reporterNs.report("Reward", "./Reward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardType(extras) {
    _reporterNs.report("RewardType", "./Reward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLifeCountUI(extras) {
    _reporterNs.report("LifeCountUI", "./UI/LifeCountUI", _context.meta, extras);
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
      Input = _cc.Input;
      input = _cc.input;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Reward = _unresolved_2.Reward;
      RewardType = _unresolved_2.RewardType;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      LifeCountUI = _unresolved_4.LifeCountUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fbc6qkwwBOVYT8NTJVZBsW", "Player", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Collider2D', 'Component', 'Contact2DType', 'EventTouch', 'Input', 'input', 'instantiate', 'IPhysics2DContact', 'Node', 'Prefab', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      ShootType = /*#__PURE__*/function (ShootType) {
        ShootType[ShootType["None"] = 0] = "None";
        ShootType[ShootType["OneShoot"] = 1] = "OneShoot";
        ShootType[ShootType["TwoShoot"] = 2] = "TwoShoot";
        return ShootType;
      }(ShootType || {});

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property({
        type: ShootType
      }), _dec9 = property(Animation), _dec10 = property(_crd && LifeCountUI === void 0 ? (_reportPossibleCrUseOfLifeCountUI({
        error: Error()
      }), LifeCountUI) : LifeCountUI), _dec(_class = (_class2 = class Player extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "shootRate", _descriptor, this);

          //多少秒發射一次子彈
          this.shootTimer = 0;

          _initializerDefineProperty(this, "bulletParent", _descriptor2, this);

          _initializerDefineProperty(this, "bullet1Prefab", _descriptor3, this);

          _initializerDefineProperty(this, "position1", _descriptor4, this);

          _initializerDefineProperty(this, "bullet2Prefab", _descriptor5, this);

          _initializerDefineProperty(this, "position2", _descriptor6, this);

          _initializerDefineProperty(this, "position3", _descriptor7, this);

          _initializerDefineProperty(this, "shootType", _descriptor8, this);

          // 默認一發類型
          _initializerDefineProperty(this, "lifeCoount", _descriptor9, this);

          _initializerDefineProperty(this, "anim", _descriptor10, this);

          _initializerDefineProperty(this, "animHit", _descriptor11, this);

          _initializerDefineProperty(this, "animDown", _descriptor12, this);

          _initializerDefineProperty(this, "invincibleTime", _descriptor13, this);

          this.invincibleTimer = 0;
          this.isInvincible = false;

          _initializerDefineProperty(this, "twoShootTime", _descriptor14, this);

          this.twoShootTimer = 0;
          this.isTwoShoot = false;

          _initializerDefineProperty(this, "lifeCountUI", _descriptor15, this);

          this.collider = null;
          this.canControl = true;
          this.lestReward = null;
        }

        onLoad() {
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.collider = this.getComponent(Collider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onDestroy() {
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);

          if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onTouchMove(event) {
          if (!this.canControl) return;
          if (this.lifeCoount < 1) return;
          var p = this.node.position;
          var targetPosition = new Vec3(p.x + event.getDeltaX(), p.y + event.getDeltaY(), p.z);

          if (targetPosition.x < -230) {
            targetPosition.x = -230;
          }

          if (targetPosition.x > 230) {
            targetPosition.x = 230;
          }

          if (targetPosition.y > 380) {
            targetPosition.y = 380;
          }

          if (targetPosition.y < -380) {
            targetPosition.y = -380;
          }

          this.node.setPosition(targetPosition);
        }

        start() {
          this.lifeCountUI.updateUI(this.lifeCoount);
        }

        update(dt) {
          switch (this.shootType) {
            case ShootType.OneShoot:
              this.oneShoot(dt);
              break;

            case ShootType.TwoShoot:
              this.twoShoot(dt);
              break;
          }

          if (this.isInvincible) {
            this.invincibleTimer += dt;

            if (this.invincibleTimer >= this.invincibleTime) {
              this.isInvincible = false;
            }
          }
        }

        transitionToTwoShootType() {
          this.shootType = ShootType.TwoShoot;
          this.twoShootTimer = 0;
        }

        transitionToOneShootType() {
          this.shootType = ShootType.OneShoot;
        }

        oneShoot(dt) {
          this.shootTimer += dt;

          if (this.shootTimer >= this.shootRate) {
            this.shootTimer = 0;
            var bullet1 = instantiate(this.bullet1Prefab);
            this.bulletParent.addChild(bullet1);
            bullet1.setWorldPosition(this.position1.worldPosition);
          }
        }

        twoShoot(dt) {
          this.twoShootTimer += dt;

          if (this.twoShootTimer >= this.twoShootTime) {
            this.transitionToOneShootType();
          }

          this.shootTimer += dt;

          if (this.shootTimer >= this.shootRate) {
            this.shootTimer = 0;
            var bullet1 = instantiate(this.bullet2Prefab);
            var bullet2 = instantiate(this.bullet2Prefab);
            this.bulletParent.addChild(bullet1);
            this.bulletParent.addChild(bullet2);
            bullet1.setWorldPosition(this.position2.worldPosition);
            bullet2.setWorldPosition(this.position3.worldPosition);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          var reward = otherCollider.getComponent(_crd && Reward === void 0 ? (_reportPossibleCrUseOfReward({
            error: Error()
          }), Reward) : Reward);

          if (reward) {
            this.onContactToReward(reward);
          } else {
            this.onContactToEnemy();
          }
        }

        onContactToReward(reward) {
          if (reward === this.lestReward) return;
          this.lestReward = reward;

          switch (reward.rewardType) {
            case (_crd && RewardType === void 0 ? (_reportPossibleCrUseOfRewardType({
              error: Error()
            }), RewardType) : RewardType).TwoShoot:
              this.transitionToTwoShootType();
              break;

            case (_crd && RewardType === void 0 ? (_reportPossibleCrUseOfRewardType({
              error: Error()
            }), RewardType) : RewardType).Bomb:
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().AddBomb();
              break;
          }

          reward.getComponent(Collider2D).enabled = false; // 禁用Collider防止跟其他物體碰撞

          reward.getComponent(Sprite).enabled = false; // 禁用Sprite防止顯示
        }

        onContactToEnemy() {
          if (this.isInvincible) return; // 如果玩家處於無敵狀態，則不執行碰撞邏輯

          this.isInvincible = true;
          this.invincibleTimer = 0;
          this.changeLifeCount(-1);

          if (this.lifeCoount > 0) {
            this.anim.play(this.animHit);
          } else {
            this.anim.play(this.animDown);
          }

          if (this.lifeCoount <= 0) {
            // 如果敵機血量小於等於0，則銷毀自身
            this.shootType = ShootType.None;

            if (this.collider) {
              // 禁用collider防止重複觸發死亡事件
              this.collider.enabled = false;
            }

            this.scheduleOnce(() => {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().gameOver();
            }, 1); // 延遲1秒播放完動畫再結束遊戲
          }
        }

        changeLifeCount(count) {
          this.lifeCoount += count;
          this.lifeCountUI.updateUI(this.lifeCoount);
        }

        disableControl() {
          this.canControl = false;
        }

        enableControl() {
          this.canControl = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shootRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bullet1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "position1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bullet2Prefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "position2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "position3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "shootType", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ShootType.OneShoot;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lifeCoount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "animHit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "animDown", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "invincibleTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "twoShootTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "lifeCountUI", [_dec10], {
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
//# sourceMappingURL=d123c7825f4e67d3752e0821367c1cb57271b8e1.js.map