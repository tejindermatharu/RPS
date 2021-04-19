import {Machine, actions, assign, EventObject} from "xstate";
import {ROCKPAPERSCISSORS} from "../types/common";

export function aiGenerator<T>(anEnum: T): T[keyof T] {
    const keys = (Object.keys(anEnum) as unknown) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * keys.length);
    const value = keys[randomIndex];
    return value;
}

export interface IGameSchema extends EventObject {
    states: {
        idle: Record<string, unknown>;
        playing: Record<string, unknown>;
        played: Record<string, unknown>;
        count2: Record<string, unknown>;
        count1: Record<string, unknown>;
        startAI: Record<string, unknown>;
    };
}

export interface IGameContext {
    aiAction?: ROCKPAPERSCISSORS;
    count: number;
}

export interface IGameEvent {
    type: "PLAY";
}

export const gameMachine = Machine<IGameContext, IGameSchema, IGameEvent>(
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
            startCount1: assign<IGameContext>({
                count: () => 1
            }),
            startCount2: assign<IGameContext>({
                count: () => 2
            }),
            startCount3: assign<IGameContext>({
                count: () => 3,
                aiAction: null
            }),
            aiAction: (context) => {
                context.aiAction = aiGenerator(ROCKPAPERSCISSORS);
            }
        }
    }
);
