import React from "react";
import GameAreaSvg from "../../assets/images/GameArea.svg";
import RockSvg from "../../assets/images/Rock.svg";
import PaperSvg from "../../assets/images/Paper.svg";
import ScissorsSvg from "../../assets/images/Scissors.svg";
import "./style.scss";
import Paper from "components/Paper";

type PlayerProps = {
    action: string;
};

function Player({action}: PlayerProps) {
    const renderRPSLogo = () => {
        switch (action) {
            case "rock":
                return <img src={RockSvg} alt="Rock Logo" />;
            case "paper":
                return <Paper />;
            // return <img className="paper__img" src={PaperSvg} alt="Paper Logo" />;
            case "scissors":
                return <img className="scissors__img" src={ScissorsSvg} alt="Scissors Logo" />;
            default:
                return <span>No data</span>;
        }
    };

    return (
        <div className="player__container">
            <img src={GameAreaSvg} alt="You Logo" />
            <div className="rps__logo">{renderRPSLogo()}</div>
        </div>
    );
}

export default Player;
