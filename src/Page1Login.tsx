import * as React from 'react';
import FormExampleField from './components/InputLogin'

export interface IPage1Props {}

export default class Page1 extends React.Component<IPage1Props> {
    public render() {
        return (
            <div>
                <FormExampleField/>
            </div>
        );
    }
}
