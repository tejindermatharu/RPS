import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {useMachine} from "@xstate/react";
import {gameMachine} from "../../lib/state-machine/gameMachine";
import BodySvg from "../../assets/images/Body.svg";
import Player from "components/Player";
import ArtificialIntelligence from "components/ArtificialIntelligence";
import "./style.scss";

interface ILocationState {
    action: string;
}

function Game() {
    const location = useLocation<ILocationState>();
    const [action, updateAction] = useState<string>(location?.state.action);
    const [state, send] = useMachine(gameMachine, {devTools: true});

    return (
        <div className="game__container">
            <img src={BodySvg} alt="Body Logo" />
            <div className="you__container">
                <Player action={action} />
            </div>
            <div className="ai__container">
                <ArtificialIntelligence
                    count={state.context.count}
                    result={state.context.aiResult}
                />
            </div>

            <button onClick={() => void send("PLAY")}>Play rock paper scissor</button>
            <br />
            <p>
                Action:
                {state.matches("playing") && "Loading... "}{" "}
                {state.matches("played") && state.context.aiResult}
                {state.context.count}
            </p>
            <span>{action}</span>
        </div>
    );
}

export default Game;
