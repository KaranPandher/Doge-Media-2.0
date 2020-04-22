import React from "react";
import { Input, Menu } from "semantic-ui-react";


export interface IMenuExampleSecondaryProps {}

export default class MenuExampleSecondary extends React.Component<IMenuExampleSecondaryProps> {
  state = { activeItem: "home" };

  handleItemClick = (e: any, { name }: any) =>
    this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="News Feed"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        >
          News Feed
        </Menu.Item>

        <Menu.Item
          name="Profile"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
