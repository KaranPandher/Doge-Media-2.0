import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {}

export const home: React.FC<Props> = ({ history}) => {
  return (
    <div>
      <div>Page: Home</div>
      <Link to="/about">Go to About!</Link>
      <button
        onClick={() => {
          // api call
          // change to the about page
          history.push("/about");
        }}
      >
        click here to go to about
      </button>
    </div>
  );
};
