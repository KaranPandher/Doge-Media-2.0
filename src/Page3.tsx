import * as React from 'react';
import TabExampleBasicAll from './components/Tabmenu';
import CardExampleCardProps from './components/ProfileCard'

export interface IPage3Props {
}

export default class Page3 extends React.Component<IPage3Props> {
  public render() {
    return (
      <div>
        <CardExampleCardProps/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
