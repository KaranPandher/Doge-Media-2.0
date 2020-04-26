import * as React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

// import ActvityDetails from "./components/ActivityDetails";
// import ActivityDashboard from "./components/ActivityDashboard";

import NavBar from "./Navbar";
import NotFound from "./NotFound";

import Page1Login from "./Page1Login";
import Page2SignUp from "./Page2SignUp";
import Page3Newsfeed from "./Page3Newsfeed";
import Page4ContactUs from "./Page4ContactUs";

import Stephane from "./Profile-Stephane";
import Doge from "./Profile-Doge";
import Karan from "./Profile-Karan";
import Marvin from "./Profile-Marvin";
import Marat from "./Profile-Marat";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
           {/* the exact path / is your Homepage */}
          <Route exact path="/" component={Page1Login} />
          <Route path="/Page1Login" component={Page1Login} />
          <Route path="/Page2SignUp" component={Page2SignUp} />
          <Route path="/Page3Newsfeed" component={Page3Newsfeed} />
          <Route path="/Page4ContactUs" component={Page4ContactUs} />
          {/* non displayed links */}
          <Route path="/Profile-Stephane" component={Stephane} />   
          <Route path="/Profile-Karan" component={Karan} />
          <Route path="/Profile-Marat" component={Marat} />
          <Route path="/Profile-Marvin" component={Marvin} />
          <Route path="/Profile-Doge" component={Doge} />
          {/* <Route exact path="/activities" component={ActivityDashboard} />
          <Route path="/activities/:id" component={ActvityDetails} /> */}
          {/* this is your default path */}
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
