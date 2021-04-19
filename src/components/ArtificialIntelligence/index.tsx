import React from "react";
import AIGameAreaSvg from "../../assets/images/AIGameArea.svg";
import CountLogo from "components/Count";
import RPCLogo from "components/RpcLogo";
import {ROCKPAPERSCISSORS, RPC_RESULT} from "src/lib/types/common";
import "./style.scss";
import classNames from "classnames";

type ArtificialIntelligenceProps = {
    count: number;
    action: ROCKPAPERSCISSORS;
    result: RPC_RESULT;
    playedStatus: boolean;
};

const ArtificialIntelligence: React.FC<ArtificialIntelligenceProps> = ({
    count,
    action,
    result,
    playedStatus
}: ArtificialIntelligenceProps) => {
    return (
        <div className="artificatialIntelligence__container">
            <img src={AIGameAreaSvg} alt="Game Area Logo" />
            <div
                className={classNames(
                    "rps__logo",
                    playedStatus === true ? "rps_logo__transition-up" : ""
                )}
            >
                {action !== null ? (
                    <RPCLogo action={action} result={result} />
                ) : (
                    <CountLogo count={count} />
                )}
            </div>
        </div>
    );
};

export default ArtificialIntelligence;
