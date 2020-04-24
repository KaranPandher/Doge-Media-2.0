import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class MessageExampleDismissibleBlock extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })

    setTimeout(() => {
      this.setState({ visible: true })
    }, 10000)
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header='Welcome back!'
          content='This is a special notification which you can dismiss.'
          color='blue'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 10s</i>
        <br />
        <br />
      </p>
    )
  }
}

export default MessageExampleDismissibleBlock
