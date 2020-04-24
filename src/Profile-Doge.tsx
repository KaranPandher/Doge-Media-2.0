import * as React from 'react';
import CardExampleCardProps from './components/ProfileCardDoge';
import TabExampleBasicAll from './components/Tabmenu';
// import ImageExampleFluid from './components/ProfileCover';

export interface IProfileDogeProps {
}

export default class ProfileDoge extends React.Component<IProfileDogeProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
