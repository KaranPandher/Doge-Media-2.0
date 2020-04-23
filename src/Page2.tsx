import * as React from "react";
import ItemExampleExtraContent from "./components/NewsFeedContent";

// newsfeed

export interface IPage2Props {}

export default class Page2 extends React.Component<IPage2Props> {
  public render() {
    return (
      <div>
        <ItemExampleExtraContent />
      </div>
    );
  }
}
