import React from "react";
import { Form, Grid, Header, Image , Button} from "semantic-ui-react";

const FormExampleField = () => (
  <Grid textAlign = 'center' verticalAlign = 'middle'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as = 'h2' color = 'teal' textAlign = 'center'>
        <Image src = '../img/banner.png'/> Login to your account 
      </Header>
  <Form>
    <Form.Input
      fluid
      icon = 'user'
      iconPosition = 'left'
      label="Email"
      placeholder="Email"
      id="form-input-email"
    />
    <Form.Input
      fluid
      icon = 'lock'
      iconPosition = 'left'
      label="Password"
      placeholder="Password"
    />
    <br></br>
    <Form.Checkbox
      label="Are you a human?"
      error={{
        content: "We want to avoid bots populating our site",
        pointing: "left",
      }}
    />
    <br></br>
  </Form>

      <Button color = 'teal' fluid size = 'large'>
        Login
      </Button>
  </Grid.Column>
  </Grid>
);

export default FormExampleField;
