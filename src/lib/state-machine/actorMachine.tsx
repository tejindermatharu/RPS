import {Machine, assign} from "xstate";
import {ROCK_PAPER_SCISSORS} from "../types/common";
import {rockPaperScissorsMachine} from "./gameMachine";

interface ActorStateSchema {
    states: {
        idle: Record<string, unknown>;
        playing: Record<string, unknown>;
        played: Record<string, unknown>;
    };
}

interface ActorContext {
    playedAction?: ROCK_PAPER_SCISSORS;
}

type ActorEvent = {type: "PLAY"};

export const actorMachine = Machine<ActorContext, ActorStateSchema, ActorEvent>({
    id: "player",
    initial: "idle",
    context: {
        playedAction: undefined
    },
    states: {
        idle: {
            on: {
                PLAY: "playing"
            }
        },
        playing: {
            invoke: {
                id: "playRockPaperScissor",
                src: rockPaperScissorsMachine,
                onDone: {
                    target: "played",
                    actions: assign({
                        playedAction: (context, event) => {
                            console.log("Action:", event.data.performedAction);
                            return event.data.performedAction;
                        }
                    })
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
});
