import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";

export interface IButtonProps {
  label: string;
}

export default class ButtonExampleEmphasis extends React.Component<IButtonProps> {
  public render() {
    let {label} = this.props
    return (
      <Fragment>
        <Button primary>{label}</Button>
      </Fragment>
    );
  }
}
