import * as React from 'react';
import CardExampleCardProps from './components/ProfileCard';
import TabExampleBasicAll from './components/Tabmenu';
import ImageExampleFluid from './components/ProfileCover';

export interface IProfileStephaneProps {
}

export default class ProfileStephane extends React.Component<IProfileStephaneProps> {
  public render() {
    return (
      <div>
        <ImageExampleFluid/>
        <CardExampleCardProps/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
