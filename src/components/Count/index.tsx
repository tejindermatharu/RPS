import React from "react";
import "./style.scss";

type CountLogoProps = {
    count: number;
};

const CountLogo: React.FC<CountLogoProps> = ({count}: CountLogoProps) => {
    return (
        <div className="count__img rpc__img">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 100 150">
                <g>
                    <g>
                        <text className="c" transform="translate(55 140)">
                            <tspan x="-55.6" y="0">
                                {count}
                            </tspan>
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default CountLogo;
