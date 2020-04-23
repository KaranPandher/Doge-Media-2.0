import * as React from "react";
import ItemExampleExtraContent from "./components/NewsFeedContent";

// not assigned

export interface IPage3Props {}

export default class Page3 extends React.Component<IPage3Props> {
  public render() {
    return (
      <div>
        <ItemExampleExtraContent />
      </div>
    );
  }
}
