import * as React from 'react';
import NavBar from './Navbar';

export interface IPage2Props {
}

export default class Page2 extends React.Component<IPage2Props> {
  public render() {
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}
