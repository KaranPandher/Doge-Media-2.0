import * as React from "react";
// import { RootState } from "./store"; 
import CardExampleCardProps4 from './components/ProfileCardKaran'
import CardExampleCardProps5 from './components/ProfileCardMarat';
import CardExampleCardProps from './components/ProfileCardDoge';
import CardExampleCardProps3 from './components/ProfileCardMarvin';
import CardExampleCardProps2 from './components/ProfileCardStephane';
import { Grid } from "semantic-ui-react";
import './index.css';
import './components/Stylesheet.css'

export interface IProfileProps {

}

export default class Profile extends React.Component<IProfileProps> {
    public render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <p></p>
                        <CardExampleCardProps2/>
                        <CardExampleCardProps4/>
                        <CardExampleCardProps3/>
                    </Grid.Row>
                    <Grid.Row>
                        <p></p>
                        <CardExampleCardProps/>
                        <CardExampleCardProps5/>
                    </Grid.Row>
                   
                </Grid>
            </div>
        );
    }
}