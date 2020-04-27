import * as React from "react";
import error from "./img/404error.png";
import { Item } from "semantic-ui-react";

export interface INotFoundProps {}

export default class NotFound extends React.Component<INotFoundProps> {
  public render() {
    return (
      <div>
        <Item.Image as="a" href="./Page3Newsfeed" size = "massive" src={error} />
      </div>
    );
  }
}
