import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useMachine} from "@xstate/react";
import {gameMachine} from "../../lib/state-machine/gameMachine";
import BodySvg from "../../assets/images/Body.svg";
import Player from "components/Player";
import ArtificialIntelligence from "components/ArtificialIntelligence";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "../../lib/types/common";
import "./style.scss";

interface ILocationState {
    action: ROCKPAPERSCISSORS;
}

const rpcRules = new Map([
    [ROCKPAPERSCISSORS.ROCK, ROCKPAPERSCISSORS.PAPER],
    [ROCKPAPERSCISSORS.PAPER, ROCKPAPERSCISSORS.SCISSORS],
    [ROCKPAPERSCISSORS.SCISSORS, ROCKPAPERSCISSORS.ROCK]
]);

function getRPCResult(you: ROCKPAPERSCISSORS, ai: ROCKPAPERSCISSORS): RPC_RESULT {
    const rule = rpcRules.get(you);

    if (you === ai) {
        return RPC_RESULT.DRAW;
    }

    if (rule === ai) {
        return RPC_RESULT.LOST;
    }

    return RPC_RESULT.WIN;
}

function Game() {
    const location = useLocation<ILocationState>();
    const [action, updateAction] = useState<ROCKPAPERSCISSORS>(location?.state.action);
    const [rpcResult, updateResult] = useState<RPC_RESULT>(RPC_RESULT.DEFAULT);
    const [state, send] = useMachine(gameMachine, {devTools: true});

    useEffect(() => {
        send("PLAY");
    }, []);

    useEffect(() => {
        if (state.context.aiAction !== null) {
            const result = getRPCResult(action, state.context.aiAction);
            updateResult(result);
        }
    }, [state.context.aiAction]);

    return (
        <div className="game__container">
            <img src={BodySvg} alt="Body Logo" />
            <div className="you__container">
                <Player action={action} result={rpcResult} />
            </div>
            <div className="ai__container">
                <ArtificialIntelligence
                    count={state.context.count}
                    action={state.context.aiAction}
                    result={rpcResult}
                />
            </div>

            <button onClick={() => void send("PLAY")}>Play rock paper scissor</button>
            <br />
            <p>
                Action:
                {state.matches("playing") && "Loading... "}{" "}
                {state.matches("played") && state.context.aiAction}
                {state.context.count}
            </p>
            <span>{action}</span>
        </div>
    );
}

export default Game;
