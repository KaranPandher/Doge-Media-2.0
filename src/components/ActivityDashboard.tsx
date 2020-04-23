import * as React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface IActivityDashboardProps {
}

export default class ActivityDashboard extends React.Component<IActivityDashboardProps> {
    public render() {
        return (
            <div>
                <Grid>
                    <Grid.Row centered>
                        Activity Dashboard
                    </Grid.Row>
                    <Grid.Row centered>
                        <Button
                            as={Link}
                            to={`/activities/1`}
                            content="Activity 1"
                            color="black"
                        />
                        <Button
                            as={Link}
                            to={`/activities/2`}
                            content="Activity 2"
                            color="blue"
                        />
                        <Button
                            as={Link}
                            to={`/activities/3`}
                            content="Activity 3"
                            color="brown"
                        />
                        <Button
                            as={Link}
                            to={`/activities/4`}
                            content="Activity 4"
                            color="green"
                        />
                        <Button
                            as={Link}
                            to={`/activities/5`}
                            content="Activity 5"
                            color="instagram"
                        />
                        <Button
                            as={Link}
                            to={`/activities/6`}
                            content="Activity 6"
                            color="facebook"
                        />
                        <Button
                            as={Link}
                            to={`/activities/7`}
                            content="Activity 7"
                            color="youtube"
                        />
                    </Grid.Row>
                </Grid>

            </div>
        );
    }
}
