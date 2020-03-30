// Factory method moves constructor outside of class,
import { IPayload, Payload, IRocket, Rocket, IStage, Stage, Engine } from "../utils/DataModels";

class RocketFactory {
    createPayload(): IPayload {
        return new Payload(100);
    }

    createStages(): IStage[] {
        const engine = new Engine(100);
        return [new Stage([engine])];
    }

    buildRocket(): IRocket {
        const rocket = new Rocket();
        rocket.payload = this.createPayload();
        rocket.stages = this.createStages();

        return rocket;
    }
}

const rocketFactory = new RocketFactory();
const rocket = rocketFactory.buildRocket();

console.log(rocket.payload);

class Satellite extends Payload {
    constructor(
        public id: number
    ) {
        super(200);
    }
}

class FirstStage extends Stage {
    constructor() {
        super([
            new Engine(1000),
            new Engine(1000),
            new Engine(1000),
            new Engine(1000)
        ]);
    }
}

class SecondStage extends Stage {
    constructor() {
        super([
            new Engine(1000)
        ]);
    }
}

type FreightRocketStages = [FirstStage, SecondStage];

class FreightRocketFactory extends RocketFactory {
    private nextSatelliteId = 0;

    createPayload(): Satellite {
        return new Satellite(this.nextSatelliteId++);
    }

    createStages(): FreightRocketStages {
        return [new FirstStage(), new SecondStage()];
    }
}
