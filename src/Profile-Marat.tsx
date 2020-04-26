import * as React from 'react';
import CardExampleCardProps5 from './components/ProfileCardMarat';
import TabExampleBasicAll from './components/Tabmenu';
import ItemCardMarat from './components/ItemCardMarat';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps5/>
        <ItemCardMarat/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
