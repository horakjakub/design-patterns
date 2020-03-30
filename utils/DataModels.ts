export interface IEngine {
    thrust: number
}

export interface IStage {
    engines: IEngine[];
}

export interface IPayload {
    weight: number;
}

export interface IRocket {
    payload: IPayload;
    stages: IStage[];

}

export class Payload implements IPayload {
    public weight: number;

    constructor(weight: number){
        this.weight = weight;
    }
}

export class Engine implements IEngine {
    public thrust: number;

    constructor(thrust: number){
        this.thrust = thrust;
    }
}

export class Stage implements IStage {
    public engines: IEngine[];

    constructor(engines: IEngine[]) {
        this.engines = engines;
    }
}

export class Rocket implements IRocket {
    payload: IPayload;
    stages: IStage[];
}
