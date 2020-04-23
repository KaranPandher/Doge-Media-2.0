import * as React from 'react';
import CardExampleCardProps from './components/ProfileCard'
import TabExampleBasicAll from './components/Tabmenu'

export interface IProfileKaranProps {
}

export default class ProfileKaran extends React.Component<IProfileKaranProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
