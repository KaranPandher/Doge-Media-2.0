import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Are you a human?' />
    </Form.Field>
  </Form>
)

export default FormExampleForm