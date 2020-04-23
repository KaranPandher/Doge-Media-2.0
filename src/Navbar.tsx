import * as React from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export interface INavBarProps {}

export default class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <Menu>
        <Menu.Item as={Link} to={`/`} name="home">
          Home
        </Menu.Item>

        <Menu.Item as={Link} to={`/activities`} name="activities">
          Activities
        </Menu.Item>

        <Menu.Item as={Link} to={`/page1`} name="otherpage">
          Page 1
        </Menu.Item>

        <Menu.Item as={Link} to={`/page2`} name="page2">
          Page 2
        </Menu.Item>

        <Menu.Item as={Link} to={`/error-404`} name="otherpage">
          Broken Link Page
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
