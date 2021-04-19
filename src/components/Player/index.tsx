import React from "react";
import classNames from "classnames";
import GameAreaSvg from "../../assets/images/GameArea.svg";
import RPCLogo from "components/RpcLogo";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "src/lib/types/common";
import RockLogo from "../../assets/images/RockCircle.svg";
import PaperLogo from "../../assets/images/PaperCircle.svg";
import ScissorsLogo from "../../assets/images/ScissorsCircle.svg";
import PlayAgain from "components/PlayAgain";
import "./style.scss";

type PlayerProps = {
    action: ROCKPAPERSCISSORS;
    result: RPC_RESULT;
    playAgain: (selection: ROCKPAPERSCISSORS) => void;
    playedStatus: boolean;
};

function Player({action, result, playedStatus, playAgain}: PlayerProps) {
    return (
        <div className="player__container">
            <img src={GameAreaSvg} alt="You Logo" />
            <div
                className={classNames(
                    "rps__logo",
                    playedStatus === true ? "rps_logo__transition-up" : ""
                )}
            >
                <RPCLogo action={action} result={result} />
            </div>
            {playedStatus === true && (
                <div className="replay__container">
                    <PlayAgain playAgain={playAgain} />
                </div>
            )}
        </div>
    );
}

export default Player;
