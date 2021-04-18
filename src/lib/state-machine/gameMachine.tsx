import {Machine, actions, assign} from "xstate";
import {ROCKPAPERSCISSORS} from "../types/common";

export function aiGenerator<T>(anEnum: T): T[keyof T] {
    const keys = (Object.keys(anEnum) as unknown) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * keys.length);
    const value = keys[randomIndex];
    return value;
}

interface IGameSchema {
    states: {
        idle: Record<string, unknown>;
        playing: Record<string, unknown>;
        played: Record<string, unknown>;
        count2: Record<string, unknown>;
        count1: Record<string, unknown>;
        startAI: Record<string, unknown>;
    };
}

interface IGameContext {
    aiAction?: ROCKPAPERSCISSORS;
    count: number;
}

type GameEvent = {type: "PLAY"};
const {log} = actions;

export const gameMachine = Machine<IGameContext, IGameSchema, GameEvent>(
    {
        id: "player",
        initial: "idle",
        context: {
            aiAction: null,
            count: 3
        },
        states: {
            idle: {
                on: {
                    PLAY: "playing"
                }
            },
            playing: {
                entry: ["startCount3"],
                after: {
                    1000: "count2"
                }
            },
            count2: {
                entry: ["startCount2"],
                after: {
                    1000: "count1"
                }
            },
            count1: {
                entry: ["startCount1"],
                after: {
                    1000: "startAI"
                }
            },
            startAI: {
                entry: ["aiAction"],
                after: {
                    0: "played"
                }
            },
            played: {
                on: {
                    PLAY: "playing"
                }
            }
        }
    },
    {
        actions: {
            startCount1: assign({
                count: () => 1
            }),
            startCount2: assign({
                count: () => 2
            }),
            startCount3: assign({
                count: () => 3,
                aiResult: () => null
            }),
            aiAction: (context, event) => {
                context.aiAction = aiGenerator(ROCKPAPERSCISSORS);
            }
        }
    }
);
