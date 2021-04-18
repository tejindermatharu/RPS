import React from "react";
import Paper from "components/Paper";
import Rock from "components/Rock";
import Scissors from "components/Scissors";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "src/lib/types/common";

type RPCLogoProps = {
    action: ROCKPAPERSCISSORS;
    result: RPC_RESULT;
};

function RPCLogo({action, result}: RPCLogoProps) {
    const renderRPSLogo = () => {
        switch (action) {
            case ROCKPAPERSCISSORS.ROCK:
                return <Rock className={`${result}__img`} />;
            case ROCKPAPERSCISSORS.PAPER:
                return <Paper className={`${result}__img`} />;
            case ROCKPAPERSCISSORS.SCISSORS:
                return <Scissors className={`${result}__img`} />;
            default:
                return <span>No data</span>;
        }
    };

    return <React.Fragment>{renderRPSLogo()}</React.Fragment>;
}

export default RPCLogo;
