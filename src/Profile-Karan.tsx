import * as React from 'react';
import CardExampleCardProps4 from './components/ProfileCardKaran'
import TabExampleBasicAll from './components/Tabmenu'

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps4/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
