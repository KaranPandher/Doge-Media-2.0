import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { home } from "./Home";
import { about }from "./About"

const App: React.FC = () => {
    return (
        <BrowserRouter>
        <Switch>   {/* makes sure there is only one route is displayed at once */}
        <Route path="/" exact component={home}/>
        <Route path="/about" exact component={about}/>
        <Route path="/" render={() => <div>404 error</div>}/>   {/*if no matches are found */}
        </Switch>
        </BrowserRouter>
    );
};

export default App;
