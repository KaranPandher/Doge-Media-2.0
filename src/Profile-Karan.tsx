import * as React from 'react';
import TabExampleBasicAll from './components/Tabmenu'
import ItemCardKaran from './components/ItemCardKaran'

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <ItemCardKaran/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
