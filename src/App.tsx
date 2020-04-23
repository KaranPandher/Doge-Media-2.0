import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import NewsFeed from "./NewsFeed";
import Profile from "./Profile";


class App extends Component {
  state = {
    isLoggedIn: true,
  };

  render() {
    return (
      <div className="App"> 
        <InputField />
        <Button label={"Login"} />
        <Button label={"Register"} />
        {this.state.isLoggedIn ? <NewsFeed /> && <Profile /> : null }
      </div>
    );
  }
}

export default App;
