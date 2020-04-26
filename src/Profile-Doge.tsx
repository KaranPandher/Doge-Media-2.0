import * as React from 'react';
import CardExampleCardProps from './components/ProfileCardDoge';
import TabExampleBasicAll from './components/Tabmenu';
import ItemCardDoge from './components/ItemCardDoge';
// import ImageExampleFluid from './components/ProfileCover';

export interface IProfileDogeProps {
}

export default class ProfileDoge extends React.Component<IProfileDogeProps> {
  public render() {
    return (
      <div>
        <CardExampleCardProps/>
        <ItemCardDoge/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
