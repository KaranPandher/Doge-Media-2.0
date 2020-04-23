import * as React from 'react';
import FormExampleFieldErrorLabel from './components/InputFieldError'
import FormExampleForm from './components/InputField'

export interface IPage1Props {
}

export default class Page1 extends React.Component<IPage1Props> {
    public render() {
        return (
            <div>
                <FormExampleForm/>
               <FormExampleFieldErrorLabel/>
            </div>
        );
    }
}
