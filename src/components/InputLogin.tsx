import React from "react";
import { Form } from "semantic-ui-react";

const FormExampleField = () => (
  <Form>
    <Form.Input
      fluid
      label="Email"
      placeholder="Email"
      id="form-input-email"
    />
    <Form.Input
      fluid
      label="Password"
      placeholder="Password"
    />
    <Form.Checkbox
      label="Are you a human?"
      error={{
        content: "We want to avoid bots populating out site",
        pointing: "left",
      }}
    />
  </Form>
);

export default FormExampleField;
