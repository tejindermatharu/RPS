import React from "react";
import {useMachine} from "@xstate/react";
import {actorMachine} from "../../lib/state-machine/actorMachine";
import BodySvg from "../../assets/images/Body.svg";
import "./style.scss";

function Game() {
    const [state, send] = useMachine(actorMachine, {devTools: true});

    return (
        <div className="game__container">
            {/* <img src={BodySvg} alt="Body Logo" /> */}
            <button onClick={() => void send("PLAY")}>Play rock paper scissor</button>
            <br />
            <p>
                Action:
                {state.matches("playing") && "Loading... "}{" "}
                {state.matches("played") && state.context.playedAction}
                {state.context.count}
            </p>
        </div>
    );
}

export default Game;
