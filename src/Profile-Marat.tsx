import * as React from 'react';
import CardExampleCardProps from './components/ProfileCardDoge';
import TabExampleBasicAll from './components/Tabmenu';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
