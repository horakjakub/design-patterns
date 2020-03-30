// this is pattern similar to Factory Method pattern but it introduces client class
// which takes creation process from Factory - so it is possible to create
import { IPayload, Payload, IRocket, Rocket, IStage, Stage, Engine } from "../utils/DataModels";

interface IRocketFactory<T extends Rocket> {
    createRocket(): T;
    createPayload(): Payload;
    createStages(): Stage[];
}

class RocketFactory implements IRocketFactory<IRocket>{
    createPayload(): IPayload {
        return new Payload(100);
    }

    createStages(): IStage[] {
        const engine = new Engine(100);
        return [new Stage([engine])];
    }

    createRocket(): IRocket {
        return new Rocket();
    }
}

class Client {
    buildRocket<T extends Rocket>(
        factory: IRocketFactory<T>
    ): T {
        let rocket = factory.createRocket();

        rocket.payload = factory.createPayload();
        rocket.stages = factory.createStages();

        return rocket;
    }
}

const rocketFactory = new RocketFactory();
const rocketFactoryClient = new Client();

const rocket = rocketFactoryClient.buildRocket(rocketFactory);

console.log(rocket);




