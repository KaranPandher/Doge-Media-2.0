import * as React from "react";
import "./App";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export interface INavBarProps {}

export default class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <Menu>
        <Menu.Item as={Link} to={`/page1`} name="login">
          Home
        </Menu.Item>

        <Menu.Item as={Link} to={`/activities`} name="activities">
          Activities
        </Menu.Item>

        <Menu.Item as={Link} to={`/page2`} name="Newsfeed">
          Newsfeed
        </Menu.Item>

        <Menu.Item as={Link} to={`/error-404`} name="error">
          Broken Link Page
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item position="right" as={Link} to={`/page1`} name="login">
            Login
          </Menu.Item>

          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
