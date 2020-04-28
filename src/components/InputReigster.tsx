import React from "react";
import { Button, Form, Icon, Message } from "semantic-ui-react";
import ModalExampleShorthand from './Terms&Conditons';

const MessageExampleAttached = () => (
  <div style={{ maxWidth: 1000 }}>
    <Message
      attached
      header="Welcome to our site!"
      content="Fill out the form below to sign-up for a new account"
      color ="orange"
    />
    <Form className="attached fluid segment">
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="First Name"
          placeholder="First Name"
          type="text"
        />
        <Form.Input
          fluid
          label="Last Name"
          placeholder="Last Name"
          type="text"
        />
      </Form.Group>
      <Form.Input label="Username" placeholder="Username" type="text" />
      <Form.Input label="Password" type="password" />
      <Form.Checkbox inline label="Are you a doge?" />
      <ModalExampleShorthand/>
      <br /><br />
      <Form.Checkbox inline label="I agree to the terms and conditions" />
      <Button color="yellow">Submit</Button>
    </Form>
    <Message attached="bottom" color="pink" warning>
      <Icon name="help" />
      Already signed up?&nbsp;<a href="../">Login here</a>&nbsp;instead.
    </Message>
  </div>
);

export default MessageExampleAttached;
