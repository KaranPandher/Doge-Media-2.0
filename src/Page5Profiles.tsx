import * as React from "react";
import CardExampleCardProps4 from './components/ProfileCardKaran'
import CardExampleCardProps5 from './components/ProfileCardMarat';
import CardExampleCardProps from './components/ProfileCardDoge';
import CardExampleCardProps3 from './components/ProfileCardMarvin';
import CardExampleCardProps2 from './components/ProfileCardStephane';

export interface IProfileProps {

}

export default class Profile extends React.Component<IProfileProps> {
    public render() {
        return (
            <div>
                <CardExampleCardProps2/>
                <CardExampleCardProps4/>
                <CardExampleCardProps3/>
                <CardExampleCardProps/>
                <CardExampleCardProps5/>
            </div>
        )
    };
}