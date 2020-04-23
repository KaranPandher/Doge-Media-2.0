import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHomePageProps {
}

export default class HomePage extends React.Component<IHomePageProps> {
    public render() {
        return (
<div>
            <div>Page1 ("Another Page")</div>
              <Link to="/home">Go Home!</Link>
              </div>
        );
    }
}
