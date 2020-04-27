import * as React from 'react';
import TabExampleBasicAll from './components/Tabmenu';
import ItemCardStephane from './components/ItemCardStephane';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <ItemCardStephane/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
