import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
    id: string;
};

export interface IActvityDetailsProps extends RouteComponentProps<RouteParams> {
}

export default class ActvityDetails extends React.Component<IActvityDetailsProps> {
    public render() {
        const { match: { params: { id } } } = this.props;

        // this.props.match.params.id;

        // let { match } = this.props;

        // let { params } = match;

        // let {id} = params;

        return (
            <div>
                The Activity ID in the URL is: {id}
            </div>
        );
    }
}
