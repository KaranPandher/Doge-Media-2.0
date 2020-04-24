import React from "react";
import { Button, Form, Icon, Message } from "semantic-ui-react";

const MessageExampleAttached = () => (
  <div>
    <Message
      attached
      header="Welcome to our site!"
      content="Fill out the form below to sign-up for a new account"
      color="blue"
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
      <Form.Checkbox inline label="Are you a human?" />
      <Form.Checkbox inline label="I agree to the terms and conditions" />
      <Button color="pink">Submit</Button>
    </Form>
    <Message attached="bottom" color="pink" warning>
      <Icon name="help" />
      Already signed up?&nbsp;<a href="../Page1Login">Login here</a>&nbsp;instead.
    </Message>
  </div>
);

export default MessageExampleAttached;
