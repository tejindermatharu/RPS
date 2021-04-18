import React from "react";
import GameAreaSvg from "../../assets/images/GameArea.svg";
import RPCLogo from "components/RpcLogo";
import {ROCKPAPERSCISSORS} from "src/lib/types/common";
import "./style.scss";

type PlayerProps = {
    action: ROCKPAPERSCISSORS;
};

function Player({action}: PlayerProps) {
    return (
        <div className="player__container">
            <img src={GameAreaSvg} alt="You Logo" />
            <div className="rps__logo">
                <RPCLogo action={action} />
            </div>
        </div>
    );
}

export default Player;
