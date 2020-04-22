import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e: any, { name }: any) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='General Info'
            active={activeItem === 'General Info'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Activities'
            active={activeItem === 'Activities'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Contact Info'
            active={activeItem === 'Contact Info'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment attached='bottom'>
          <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    )
  }
}