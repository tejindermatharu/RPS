import React from "react";
import AIGameAreaSvg from "../../assets/images/AIGameArea.svg";
import RockSvg from "../../assets/images/Rock.svg";
import PaperSvg from "../../assets/images/Paper.svg";
import ScissorsSvg from "../../assets/images/Scissors.svg";
import CountLogo from "components/Count";

import "./style.scss";

type ArtificialIntelligenceProps = {
    count: number;
    result: string;
};

function ArtificialIntelligence({count, result}: ArtificialIntelligenceProps) {
    // const renderCountLogo = () => {
    //     switch (count) {
    //         case 1:
    //             return <img src={OneSvg} alt="One Logo" />;
    //         case 2:
    //             return <img src={TwoSvg} alt="Two Logo" />;
    //         case 3:
    //             return <img src={ThreeSvg} alt="Three Logo" />;
    //         default:
    //             return null;
    //     }
    // };

    return (
        <div className="artificatialIntelligence__container">
            <img src={AIGameAreaSvg} alt="Game Area Logo" />
            <div className="count__logo">
                <CountLogo count={count} />
            </div>
        </div>
    );
}

export default ArtificialIntelligence;
