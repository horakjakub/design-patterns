"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Factory method moves constructor outside of class,
var DataModels_1 = require("../utils/DataModels");
var RocketFactory = /** @class */ (function () {
    function RocketFactory() {
    }
    RocketFactory.prototype.createPayload = function () {
        return new DataModels_1.Payload(100);
    };
    RocketFactory.prototype.createStages = function () {
        var engine = new DataModels_1.Engine(100);
        return [new DataModels_1.Stage([engine])];
    };
    RocketFactory.prototype.buildRocket = function () {
        var rocket = new DataModels_1.Rocket();
        rocket.payload = this.createPayload();
        rocket.stages = this.createStages();
        return rocket;
    };
    return RocketFactory;
}());
var rocketFactory = new RocketFactory();
var rocket = rocketFactory.buildRocket();
console.log(rocket.payload);
var Satellite = /** @class */ (function (_super) {
    __extends(Satellite, _super);
    function Satellite(id) {
        var _this = _super.call(this, 200) || this;
        _this.id = id;
        return _this;
    }
    return Satellite;
}(DataModels_1.Payload));
var FirstStage = /** @class */ (function (_super) {
    __extends(FirstStage, _super);
    function FirstStage() {
        return _super.call(this, [
            new DataModels_1.Engine(1000),
            new DataModels_1.Engine(1000),
            new DataModels_1.Engine(1000),
            new DataModels_1.Engine(1000)
        ]) || this;
    }
    return FirstStage;
}(DataModels_1.Stage));
var SecondStage = /** @class */ (function (_super) {
    __extends(SecondStage, _super);
    function SecondStage() {
        return _super.call(this, [
            new DataModels_1.Engine(1000)
        ]) || this;
    }
    return SecondStage;
}(DataModels_1.Stage));
var FreightRocketFactory = /** @class */ (function (_super) {
    __extends(FreightRocketFactory, _super);
    function FreightRocketFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextSatelliteId = 0;
        return _this;
    }
    FreightRocketFactory.prototype.createPayload = function () {
        return new Satellite(this.nextSatelliteId++);
    };
    FreightRocketFactory.prototype.createStages = function () {
        return [new FirstStage(), new SecondStage()];
    };
    return FreightRocketFactory;
}(RocketFactory));
