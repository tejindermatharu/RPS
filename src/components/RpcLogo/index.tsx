import React from "react";
import Paper from "components/Paper";
import Rock from "components/Rock";
import Scissors from "components/Scissors";
import {ROCKPAPERSCISSORS} from "src/lib/types/common";

type RPCLogoProps = {
    action: ROCKPAPERSCISSORS;
};

function RPCLogo({action}: RPCLogoProps) {
    const renderRPSLogo = () => {
        switch (action) {
            case ROCKPAPERSCISSORS.ROCK:
                return <Rock className="default__img" />;
            case ROCKPAPERSCISSORS.PAPER:
                return <Paper className="default__img" />;
            case ROCKPAPERSCISSORS.SCISSORS:
                return <Scissors className="default__img" />;
            default:
                return <span>No data</span>;
        }
    };

    return <React.Fragment>{renderRPSLogo()}</React.Fragment>;
}

export default RPCLogo;
