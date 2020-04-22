import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleFieldErrorLabel = () => (
  <Form>
    <Form.Input
      error={{ content: 'Please enter your valid email', pointing: 'below' }}
      fluid
      label='Email'
      placeholder='Email'
      id='form-input-email'
    />
    <Form.Input
      error='Please enter your password'
      fluid
      label='Password'
      placeholder='Password'
    />
    <Form.Checkbox
      label='Are you a human?'
      error={{
        content: '',
        pointing: 'left',
      }}
    />
  </Form>
)

export default FormExampleFieldErrorLabel