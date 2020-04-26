import * as React from 'react';
import TabExampleBasicAll from './components/Tabmenu';
import ItemCardMarat from './components/ItemCardMarat';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <ItemCardMarat/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
