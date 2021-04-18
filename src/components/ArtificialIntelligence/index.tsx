import React from "react";
import AIGameAreaSvg from "../../assets/images/AIGameArea.svg";
import CountLogo from "components/Count";
import RPCLogo from "components/RpcLogo";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "src/lib/types/common";
import "./style.scss";

type ArtificialIntelligenceProps = {
    count: number;
    action: ROCKPAPERSCISSORS;
    result: RPC_RESULT;
};

function ArtificialIntelligence({count, action, result}: ArtificialIntelligenceProps) {
    return (
        <div className="artificatialIntelligence__container">
            <img src={AIGameAreaSvg} alt="Game Area Logo" />
            <div className="count__logo">
                {action !== null ? (
                    <RPCLogo action={action} result={result} />
                ) : (
                    <CountLogo count={count} />
                )}
            </div>
        </div>
    );
}

export default ArtificialIntelligence;
