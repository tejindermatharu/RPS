import {Machine, assign, actions} from "xstate";
import {ROCK_PAPER_SCISSORS} from "../types/common";

const {log} = actions;

export function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = (Object.keys(anEnum) as unknown) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    // console.log("Picked a random enum: ", randomEnumValue);
    return randomEnumValue;
}

interface RockPaperScissorsStateSchema {
    states: {
        screamRock: Record<string, unknown>;
        screamPaper: Record<string, unknown>;
        screamScissors: Record<string, unknown>;
        randomizingAction: Record<string, unknown>;
        played: Record<string, unknown>;
    };
}

interface RockPaperScissorsContext {
    action: ROCK_PAPER_SCISSORS | "NONE";
}

export const rockPaperScissorsMachine = Machine<
    RockPaperScissorsContext,
    RockPaperScissorsStateSchema,
    any
>({
    id: "rockPaperScissors",
    initial: "screamRock",
    context: {
        action: "NONE"
    },
    states: {
        screamRock: {
            entry: log((context, event) => "ROCK...", "RockPaperScissors"),
            after: {
                // 1/10th later transition to scream "PAPER"
                100: "screamPaper"
            }
        },
        screamPaper: {
            entry: log((context, event) => "PAPER...", "RockPaperScissors"),
            after: {
                // 1/10th second later transition to scream "SCISSORS"
                100: "screamScissors"
            }
        },
        screamScissors: {
            entry: log((context, event) => "SCISSORS...", "RockPaperScissors"),
            after: {
                // 1/10th second later transition to play
                100: "randomizingAction"
            }
        },
        randomizingAction: {
            on: {
                "": {
                    actions: assign({
                        action: () => randomEnum(ROCK_PAPER_SCISSORS)
                    }),
                    target: "played"
                }
            }
        },
        played: {
            type: "final",
            data: {
                performedAction: (context, event) => context.action
            }
        }
    }
});
