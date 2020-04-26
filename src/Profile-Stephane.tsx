import * as React from 'react';
import CardExampleCardProps2 from './components/ProfileCardStephane';
import TabExampleBasicAll from './components/Tabmenu';
import ItemCardStephane from './components/ItemCardStephane';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps2/>
        <ItemCardStephane/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
