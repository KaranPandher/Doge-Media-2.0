import React from "react";
import { Form, Grid, Header, Image, Button } from "semantic-ui-react";
import loginIcon from "../img/login-icon.png";

const FormExampleField = () => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 600 }} centered >
      <br/>
      <Header as="h2" color="black" textAlign="center">
        <Image src={loginIcon} /> Login to your account
      </Header>
      <Form>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          // label="Email"
          placeholder="Email"
          id="form-input-email"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          // label="Password"
          placeholder="Password"
          type="password"
        />
        <br></br>
        <Form.Checkbox
          label="Are you a doge?"
          error={{
            content: "We want to avoid doge bots populating our site",
            pointing: "left",
          }}
        />
        <br></br>
      </Form>

      <Button color="yellow" fluid size="large" textAlign="left" href="../Page3Newsfeed">
        Login
      </Button>
    </Grid.Column>
  </Grid>
);

export default FormExampleField;
