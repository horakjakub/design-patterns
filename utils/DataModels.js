"use strict";
exports.__esModule = true;
var Payload = /** @class */ (function () {
    function Payload(weight) {
        this.weight = weight;
    }
    return Payload;
}());
exports.Payload = Payload;
var Engine = /** @class */ (function () {
    function Engine(thrust) {
        this.thrust = thrust;
    }
    return Engine;
}());
exports.Engine = Engine;
var Stage = /** @class */ (function () {
    function Stage(engines) {
        this.engines = engines;
    }
    return Stage;
}());
exports.Stage = Stage;
var Rocket = /** @class */ (function () {
    function Rocket() {
    }
    return Rocket;
}());
exports.Rocket = Rocket;
