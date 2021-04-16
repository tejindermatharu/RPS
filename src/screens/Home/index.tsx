import React from "react";
import ScissorsLogo from "../../assets/images/Scissors.svg";
import PaperLogo from "../../assets/images/Paper.svg";
import RockLogo from "../../assets/images/Rock.svg";
import ResultsLogo from "../../assets/images/results.svg";
import BodySvg from "../../assets/images/Body.svg";
import RoundedRectangle from "../../assets/images/RoundedRectangle.svg";
import "./style.scss";

function Home() {
    return (
        <div className="home__container">
            <img src={BodySvg} alt="Body Logo" />
            <div className="results__image">
                <img src={ResultsLogo} alt="Results Logo" />
                <div className="game__images">
                    <div className="rock__img">
                        <img src={RockLogo} alt="Rock Logo" />
                    </div>
                    <div className="paper__img">
                        <img src={PaperLogo} alt="Paper Logo" />
                    </div>
                    <div className="scissors__img">
                        <img src={ScissorsLogo} alt="Scissors Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
