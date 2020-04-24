import * as React from 'react';
import CardExampleCardProps3 from './components/ProfileCardMarvin';
import TabExampleBasicAll from './components/Tabmenu';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps3/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
