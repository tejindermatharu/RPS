import React, {useEffect, useState} from "react";
import classNames from "classnames";
import GameAreaSvg from "../../assets/images/GameArea.svg";
import RPCLogo from "components/RpcLogo";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "src/lib/types/common";
import PlayAgain from "components/PlayAgain";
import "./style.scss";

type PlayerProps = {
    action: ROCKPAPERSCISSORS;
    result: RPC_RESULT;
    playAgain: (selection: ROCKPAPERSCISSORS) => void;
    playedStatus: boolean;
};

function Player({action, result, playedStatus, playAgain}: PlayerProps) {
    const [isMounted, updateisMounted] = useState<boolean>(false);

    useEffect(() => {
        updateisMounted(true);
    }, []);

    return (
        <div className="player__container">
            <img src={GameAreaSvg} alt="You Logo" />
            {isMounted === true && (
                <React.Fragment>
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
                </React.Fragment>
            )}
        </div>
    );
}

export default Player;
