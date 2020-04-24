import * as React from "react";
import MessageExampleAttached from "./components/InputReigster";

// not assigned

export interface IPage2Props {}

export default class Page2 extends React.Component<IPage2Props> {
  public render() {
    return (
      <div>
        <MessageExampleAttached />
      </div>
    );
  }
}
