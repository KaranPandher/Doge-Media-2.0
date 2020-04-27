import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleList = () => (
  <Message color ="orange" style={{ maxWidth: 1000 }} >
    <Message.Header>New Site Features</Message.Header>
    <Message.List>
      <Message.Item>You can now have click on images that will lead to your profile</Message.Item>
      <Message.Item>We're working on getting the mobile version functional</Message.Item>
      <Message.Item>Any suggestion for improvement can be emailed to info@dogemedia.ca</Message.Item>
    </Message.List>
  </Message>
  
)

export default MessageExampleList
