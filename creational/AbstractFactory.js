"use strict";
exports.__esModule = true;
// this is pattern similar to Factory Method pattern but it introduces client class
// which takes creation process from Factory - so it is possible to create
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
    RocketFactory.prototype.createRocket = function () {
        return new DataModels_1.Rocket();
    };
    return RocketFactory;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.buildRocket = function (factory) {
        var rocket = factory.createRocket();
        rocket.payload = factory.createPayload();
        rocket.stages = factory.createStages();
        return rocket;
    };
    return Client;
}());
var rocketFactory = new RocketFactory();
var rocketFactoryClient = new Client();
var rocket = rocketFactoryClient.buildRocket(rocketFactory);
console.log(rocket);
