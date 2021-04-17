import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Game from "./screens/Game";
import Home from "./screens/Home";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Router>
                <div className="app__body">
                    <div>
                        <Switch>
                            <Route path="/game">
                                <Game />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
