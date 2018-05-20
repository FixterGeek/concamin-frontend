import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './componentes/home/HomeContainer';
import ProfileContainer from './componentes/profile/ProfileContainer';

const Routes =()=>(
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/profile" component={ProfileContainer} /> 
    </Switch>
);

export default Routes;

