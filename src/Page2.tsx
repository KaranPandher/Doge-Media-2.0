import * as React from "react";
import ItemExampleExtraContent from "./components/NewsFeedContent";
import MessageExampleDismissibleBlock from './components/WelcomeBackPopUp';
import MessageExampleIconProps from './components/MailistSection'

// newsfeed

export interface IPage2Props {}

export default class Page2 extends React.Component<IPage2Props> {
  public render() {
    return (
      <div>
        <MessageExampleDismissibleBlock/>
        <ItemExampleExtraContent />
        <MessageExampleIconProps/>
      </div>
    );
  }
}
