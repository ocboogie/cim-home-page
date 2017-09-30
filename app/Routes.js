import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Root from './components/Root';
import Assignments from './components/Assignments';
import Assignment from './components/Assignment';
import p404 from './components/404';

export default () => (
    <HashRouter>
        <Root>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/assignments/:assignmentId" component={Assignment} />
                <Route path="/assignments" component={Assignments} />
                <Route component={p404} />
            </Switch>
        </Root>
    </HashRouter>
);
