import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from './Chat'



const Routes = () => (
    <Switch>
        <Route path="/chat" component={Chat} />
    </Switch>
);

export default Routes