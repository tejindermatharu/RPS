import {Machine, assign, actions} from "xstate";
import {ROCKPAPERSCISSORS} from "../types/common";

// export function randomGenerator(anEnum) {
//     const keys = Object.keys(anEnum);
//     const index = Math.floor(Math.random() * keys.length);
//     const value = keys[index];
//     return value;
// }

export function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = (Object.keys(anEnum) as unknown) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    // console.log("Picked a random enum: ", randomEnumValue);
    return randomEnumValue;
}

interface ActorStateSchema {
    states: {
        idle: Record<string, unknown>;
        playing: Record<string, unknown>;
        played: Record<string, unknown>;
        // screamRock: Record<string, unknown>;
        screamPaper: Record<string, unknown>;
        screamScissors: Record<string, unknown>;
        startAI: Record<string, unknown>;
    };
}

interface ActorContext {
    playedAction?: ROCKPAPERSCISSORS;
    count: number;
}

type ActorEvent = {type: "PLAY"};
const {log} = actions;

export const actorMachine = Machine<ActorContext, ActorStateSchema, ActorEvent>(
    {
        id: "player",
        initial: "idle",
        context: {
            playedAction: undefined,
            count: 0
        },
        states: {
            idle: {
                on: {
                    PLAY: "playing"
                }
            },
            playing: {
                entry: ["startCount1"],
                after: {
                    1000: "screamPaper"
                }
            },
            screamPaper: {
                entry: ["startCount2"],
                after: {
                    1000: "screamScissors"
                }
            },
            screamScissors: {
                entry: ["startCount3"],
                after: {
                    1000: "startAI"
                }
            },
            startAI: {
                on: {
                    "": {
                        actions: assign({
                            playedAction: () => randomEnum(ROCKPAPERSCISSORS)
                        }),
                        target: "played"
                    }
                }
            },
            played: {
                on: {
                    /** Let's play again :) */
                    PLAY: "playing"
                }
            }
        }
    },
    {
        actions: {
            // action implementations
            startCount1: (context, event) => {
                context.count = 1;
            },
            startCount2: (context, event) => {
                context.count = 2;
            },
            startCount3: (context, event) => {
                context.count = 3;
            }
        }
    }
);
