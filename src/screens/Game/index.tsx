import React from "react";
import {useLocation} from "react-router-dom";
import {useMachine} from "@xstate/react";
import {gameMachine} from "../../lib/state-machine/gameMachine";
import BodySvg from "../../assets/images/Body.svg";
import "./style.scss";
import Player from "components/Player";

function Game() {
    const [state, send] = useMachine(gameMachine, {devTools: true});
    const location = useLocation();

    return (
        <div className="game__container">
            <img src={BodySvg} alt="Body Logo" />
            <div className="you__container">
                <Player />
            </div>
            <button onClick={() => void send("PLAY")}>Play rock paper scissor</button>
            <br />
            <p>
                Action:
                {state.matches("playing") && "Loading... "}{" "}
                {state.matches("played") && state.context.aiResult}
                {state.context.count}
            </p>
            <span>{location?.state.action}</span>
        </div>
    );
}

export default Game;
