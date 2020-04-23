import * as React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

// import ActvityDetails from "./components/ActivityDetails";
// import ActivityDashboard from "./components/ActivityDashboard";

import NavBar from "./Navbar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import ContactUs from "./Contact-Us";
import Stephane from "./Profile-Stephane";
import Karan from "./Profile-Karan";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/contact-us" component={ContactUs} />
          {/* non displayed links */}
          <Route path="/Profile-Stephane" component={Stephane} />   
          <Route path="/Profile-Karan" component={Karan} />
          {/* <Route exact path="/activities" component={ActivityDashboard} />
          <Route path="/activities/:id" component={ActvityDetails} /> */}

          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
