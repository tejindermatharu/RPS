import React from "react";
import {useHistory} from "react-router";
import ScissorsLogo from "../../assets/images/ScissorsCircle.svg";
import PaperLogo from "../../assets/images/PaperCircle.svg";
import RockLogo from "../../assets/images/RockCircle.svg";
import ResultsLogo from "../../assets/images/results.svg";
import BodySvg from "../../assets/images/Body.svg";
import {ROCKPAPERSCISSORS} from "src/lib/types/common";
import "./style.scss";

function Home() {
    const history = useHistory();

    const onGameItemClick = (action: ROCKPAPERSCISSORS) => {
        history.push({
            pathname: "/game",
            state: {
                action: action
            }
        });
    };

    return (
        <div className="home__container">
            <img src={BodySvg} alt="Body Logo" />
            <div className="results__image">
                <img src={ResultsLogo} alt="Results Logo" />
                <div className="game__images">
                    <div
                        onClick={() => onGameItemClick(ROCKPAPERSCISSORS.ROCK)}
                        className="rock__img"
                    >
                        <img src={RockLogo} alt="Rock Logo" />
                    </div>
                    <div
                        onClick={() => onGameItemClick(ROCKPAPERSCISSORS.PAPER)}
                        className="paper__img"
                    >
                        <img src={PaperLogo} alt="Paper Logo" />
                    </div>
                    <div
                        onClick={() => onGameItemClick(ROCKPAPERSCISSORS.SCISSORS)}
                        className="scissors__img"
                    >
                        <img src={ScissorsLogo} alt="Scissors Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
