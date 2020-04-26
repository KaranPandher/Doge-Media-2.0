import * as React from 'react';
import TabExampleBasicAll from './components/Tabmenu';
import ItemCardDoge from './components/ItemCardDoge';
// import ImageExampleFluid from './components/ProfileCover';

export interface IProfileDogeProps {
}

export default class ProfileDoge extends React.Component<IProfileDogeProps> {
  public render() {
    return (
      <div>
        <ItemCardDoge/>
        <TabExampleBasicAll/>
      </div>
    );
  }
}
