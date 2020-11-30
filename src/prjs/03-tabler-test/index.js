import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import "tabler-react/dist/Tabler.css";

import {
    HomePage,
    LoginPage,
    DetailsPage,
    InsertPage,
    ErrorPage,
    Error404Page
} from "./pages";

const ReactRouterSetup = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/detail" component={DetailsPage} />
                <Route exact path="/insert" component={InsertPage} />
                <Route exact path="/error" component={ErrorPage} />
                <Route component={Error404Page} />
            </Switch>
        </Router>
    );
}

export default ReactRouterSetup;