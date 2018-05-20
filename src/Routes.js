import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import { PostCard } from './components/newsfeed/PostCard';
import {LoginDisplay} from './components/login/LoginDisplay';

const Routes =()=>(
    <Switch>
        {/*<Route exact path="/" component={HomeContainer} />*/}
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/login" component={LoginDisplay}/>
        <Route exact path="/" component={PostCard}/>

    </Switch>
);

export default Routes;

