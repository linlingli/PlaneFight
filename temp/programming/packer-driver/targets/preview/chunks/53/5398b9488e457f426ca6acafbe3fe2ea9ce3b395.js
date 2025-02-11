System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, math, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, EnemyManager;

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
      instantiate = _cc.instantiate;
      math = _cc.math;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbffaaofJZLz4kIK/fSlmMe", "EnemyManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'math', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManager", EnemyManager = (_dec = ccclass('EnemyManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = class EnemyManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemy0SpawnRate", _descriptor, this);

          _initializerDefineProperty(this, "enemy0Prefab", _descriptor2, this);

          _initializerDefineProperty(this, "enemy1SpawnRate", _descriptor3, this);

          _initializerDefineProperty(this, "enemy1Prefab", _descriptor4, this);

          _initializerDefineProperty(this, "enemy2SpawnRate", _descriptor5, this);

          _initializerDefineProperty(this, "enemy2Prefab", _descriptor6, this);

          _initializerDefineProperty(this, "rewardSpawnRate", _descriptor7, this);

          _initializerDefineProperty(this, "reward1Prefab", _descriptor8, this);

          _initializerDefineProperty(this, "reward2Prefab", _descriptor9, this);
        }

        start() {
          // 設置定時器(調用方法,間隔時間)
          this.schedule(this.enemy0Spawn, this.enemy0SpawnRate);
          this.schedule(this.enemy1Spawn, this.enemy1SpawnRate);
          this.schedule(this.enemy2Spawn, this.enemy2SpawnRate);
          this.schedule(this.rewardSpawn, this.rewardSpawnRate);
        }

        update(deltaTime) {}

        onDestroy() {
          // 銷毀定時器
          this.unschedule(this.enemy0Spawn);
          this.unschedule(this.enemy1Spawn);
          this.unschedule(this.enemy2Spawn);
          this.unschedule(this.rewardSpawn);
        }

        enemy0Spawn() {
          this.objectSpawn(this.enemy0Prefab, -215, 215, 450);
        }

        enemy1Spawn() {
          this.objectSpawn(this.enemy1Prefab, -200, 200, 475);
        }

        enemy2Spawn() {
          this.objectSpawn(this.enemy2Prefab, -155, 155, 560);
        }

        rewardSpawn() {
          var randomNumber = math.randomRangeInt(0, 2); // 包含0 不包含2  0,1

          var prefab = null;

          if (randomNumber === 0) {
            prefab = this.reward1Prefab;
          } else {
            prefab = this.reward2Prefab;
          }

          this.objectSpawn(prefab, -207, 207, 474);
        }

        objectSpawn(objPrefab, mixX, maxX, Y) {
          var enemy = instantiate(objPrefab); // 實例化enemy

          this.node.addChild(enemy); // 添加到場景當中
          // 隨機設置位置 x軸：-200 ~ 200 y軸保持不變

          var randomX = math.randomRangeInt(mixX, maxX);
          enemy.setPosition(randomX, Y, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemy0SpawnRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemy0Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemy1SpawnRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemy1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enemy2SpawnRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "enemy2Prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rewardSpawnRate", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 15;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reward1Prefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "reward2Prefab", [_dec6], {
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
//# sourceMappingURL=5398b9488e457f426ca6acafbe3fe2ea9ce3b395.js.map