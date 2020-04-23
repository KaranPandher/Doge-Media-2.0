import * as React from "react";
import ItemExampleExtraContent from "./components/NewsFeedContent";

// not assigned

export interface IPage4Props {}

export default class Page4 extends React.Component<IPage4Props> {
  public render() {
    return (
      <div>
        <ItemExampleExtraContent />
      </div>
    );
  }
}
