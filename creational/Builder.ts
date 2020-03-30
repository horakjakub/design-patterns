// this is pattern similar to Factory Method pattern but it introduces client class
// which takes creation process from Factory - so it is possible to create
import { IPayload, Payload, IRocket, Rocket, IStage, Stage, Engine } from "../utils/DataModels";

class Probe implements Payload {
    weight: number;
}

class SolidRocketEngine extends Engine { }

class SoundingRocket implements Rocket {
    payload: Probe;
    engine: SolidRocketEngine;
}

class LiquidRocketEngine extends Engine {
    fuelLevel = 0;

    refuel(level: number): void {
        this.fuelLevel = level;
    }
}

abstract class LiquidRocketStage implements Stage {
    engines: LiquidRocketEngine[] = [];

    refuel(level = 100): void {
        for (let engine of this.engines) {
            engine.refuel(level);
        }
    }
}

class FreightRocketFirstStage extends LiquidRocketStage {
    constructor(thrust: number) {
        super();

        let enginesNumber = 4;
        let singleEngineThrust = thrust / enginesNumber;

        for (let i = 0; i < enginesNumber; i++) {
            let engine =
                new LiquidRocketEngine(singleEngineThrust);
            this.engines.push(engine);
        }
    }
}

class FreightRocketSecondStage extends LiquidRocketStage {
    constructor(thrust: number) {
        super();
        this.engines.push(new LiquidRocketEngine(thrust));
    }
}

type FreightRocketStages =
    [FreightRocketFirstStage, FreightRocketSecondStage];

class FreightRocket implements Rocket {
    payload: Satellite;
    stages = [] as FreightRocketStages;
}
