import {Machine, assign, EventObject} from "xstate";
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
        start: Record<string, unknown>;
        played: Record<string, unknown>;
        startAI: Record<string, unknown>;
        counting: Record<string, unknown>;
    };
}

export interface IGameContext {
    aiAction?: ROCKPAPERSCISSORS;
    count: number;
}

export interface IGameEvent {
    type: "PLAY";
    data?: {count: number};
}

const guards = {
    canCountDown: (context) => !guards.countedDown(context),
    countedDown: (context) => context.count === 0
};

const COUNTDOWN_DEFAULT = 5;

export const gameMachine = Machine<IGameContext, IGameSchema, IGameEvent>(
    {
        id: "player",
        initial: "idle",
        context: {
            aiAction: null,
            count: COUNTDOWN_DEFAULT
        },
        states: {
            idle: {
                on: {
                    PLAY: {
                        target: "start",
                        actions: ["reset"]
                    }
                }
            },
            start: {
                entry: ["reset"],
                on: {
                    "": {
                        target: "counting"
                    }
                }
            },
            counting: {
                after: {
                    1000: [
                        {
                            target: "counting",
                            actions: "countdown",
                            cond: "canCountDown"
                        },
                        {
                            target: "startAI",
                            cond: "countedDown"
                        }
                    ]
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
                    PLAY: {
                        target: "start",
                        actions: ["reset"]
                    }
                }
            }
        }
    },
    {
        guards,
        actions: {
            countdown: assign({count: (context) => context.count - 1}),
            reset: assign({
                count: (context, event) => event?.data?.count ?? COUNTDOWN_DEFAULT,
                aiAction: (context) => null
            }),
            aiAction: (context) => {
                context.aiAction = aiGenerator(ROCKPAPERSCISSORS);
            }
        }
    }
);
