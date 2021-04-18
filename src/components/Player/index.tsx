import React from "react";
import GameAreaSvg from "../../assets/images/GameArea.svg";
import RPCLogo from "components/RpcLogo";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "src/lib/types/common";
import "./style.scss";

type PlayerProps = {
    action: ROCKPAPERSCISSORS;
    result: RPC_RESULT;
};

function Player({action, result}: PlayerProps) {
    return (
        <div className="player__container">
            <img src={GameAreaSvg} alt="You Logo" />
            <div className="rps__logo">
                <RPCLogo action={action} result={result} />
            </div>
        </div>
    );
}

export default Player;
