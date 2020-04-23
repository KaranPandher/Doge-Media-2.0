import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {}

export const about: React.FC<Props> = ({ history}) => {
  return (
    <div>
      <div>Page: About</div>
      <Link to="/home">Go Home!</Link>
      <button
        onClick={() => {
          // api call
          // change to the about page
          history.push("/home");
        }}
      >
        click here to go to home!
      </button>
      <button
        onClick={() => {
          // api call
          // change to the about page
          history.push("/dingus");
        }}
      >
        click here dingus
      </button>
    </div>
  );
};