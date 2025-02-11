System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RewardType, Reward;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd994LEAGRIWquTLK24psOW", "Reward", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RewardType", RewardType = /*#__PURE__*/function (RewardType) {
        RewardType[RewardType["TwoShoot"] = 0] = "TwoShoot";
        RewardType[RewardType["Bomb"] = 1] = "Bomb";
        return RewardType;
      }({}));

      _export("Reward", Reward = (_dec = ccclass('Reward'), _dec(_class = (_class2 = class Reward extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rewardType", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {
          const p = this.node.position; // 得到獎品當前坐標

          this.node.setPosition(p.x, p.y - this.speed * deltaTime, p.z); // 控制獎品向下移動

          if (this.node.position.y < -580) {
            // 獎品超出邊界外則銷毀自身
            this.node.destroy();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rewardType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return RewardType.TwoShoot;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 90;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b889a93d2eeb1bd0a9136c3b1bf796327090b27e.js.map