import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useMachine} from "@xstate/react";
import {gameMachine} from "../../lib/state-machine/gameMachine";
import BodySvg from "../../assets/images/Body.svg";
import Player from "components/Player";
import ArtificialIntelligence from "components/ArtificialIntelligence";
import {GameResult, ROCKPAPERSCISSORS, RPC_RESULT} from "../../lib/types/common";
import {createGameResult, getRPCResult} from "src/lib/helpers/gameHelper";
import ResultsBanner from "components/ResultBanner";
import "./style.scss";

interface ILocationState {
    action: ROCKPAPERSCISSORS;
}

const Game: React.FC = () => {
    const location = useLocation<ILocationState>();
    const [action, updateAction] = useState<ROCKPAPERSCISSORS>(location?.state.action);
    const [rpcResult, updateResult] = useState<GameResult>(
        createGameResult(RPC_RESULT.DEFAULT, RPC_RESULT.DEFAULT)
    );
    const [state, send] = useMachine(gameMachine, {devTools: true});

    useEffect(() => {
        send("PLAY");
    }, []);

    useEffect(() => {
        if (state.context.aiAction !== null) {
            const result = getRPCResult(action, state.context.aiAction);
            updateResult(result);
        }
    }, [state.context.aiAction, action]);

    const playAgain = (action: ROCKPAPERSCISSORS) => {
        updateAction(action);
        updateResult(createGameResult(RPC_RESULT.DEFAULT, RPC_RESULT.DEFAULT));
        send("PLAY");
    };

    return (
        <div className="game__container">
            <img src={BodySvg} alt="Body Logo" />
            <div className="you__container">
                <Player
                    action={action}
                    result={rpcResult.yourResult}
                    playAgain={playAgain}
                    playedStatus={state.matches("played")}
                />
            </div>
            <div className="ai__container">
                <ArtificialIntelligence
                    count={state.context.count}
                    action={state.context.aiAction}
                    result={rpcResult.aiResult}
                    playedStatus={state.matches("played")}
                />
            </div>
            <div>
                <ResultsBanner
                    result={rpcResult.yourResult}
                    playedStatus={state.matches("played")}
                />
            </div>
        </div>
    );
};

export default Game;
