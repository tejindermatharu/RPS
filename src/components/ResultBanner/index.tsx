import React from "react";
import {RPC_RESULT} from "src/lib/types/common";
import "./style.scss";

type ResultsBannerProps = {
    result: RPC_RESULT;
    playedStatus: boolean;
};

const ResultsBanner = ({result, playedStatus}: ResultsBannerProps) => {
    return (
        <div className="results-banner__container">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="632" viewBox="0 0 200 632">
                <g transform="translate(-700 -281)">
                    <rect className="h" width="260" height="500" transform="translate(669 347)" />
                    <text className="i" transform="translate(799 605)">
                        <tspan x="-77.25" y="0">
                            {playedStatus && result}
                        </tspan>
                    </text>
                </g>
            </svg>
        </div>
    );
};
export default ResultsBanner;
