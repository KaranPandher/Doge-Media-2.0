import React, { Fragment } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

function LoginPage() {
  return (
    <Fragment>
        <InputField />
        <Button label={"Login"}/>
    </Fragment>
  );
}

export default LoginPage;