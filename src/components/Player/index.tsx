import React from "react";
import GameAreaSvg from "../../assets/images/GameArea.svg";
import "./style.scss";

function Player() {
    return (
        <div className="player__container">
            <img src={GameAreaSvg} alt="You Logo" />
        </div>
    );
}

export default Player;
