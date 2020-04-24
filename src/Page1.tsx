import * as React from 'react';
import MessageExampleAttached from './components/InputField'
// import LabelExampleImage from './components/ProfileMenu'

// login page

export interface IPage1Props {
}

export default class Page1 extends React.Component<IPage1Props> {
    public render() {
        return (
            <div>
                <MessageExampleAttached/>
               {/* <LabelExampleImage/> */}
            </div>
        );
    }
}
