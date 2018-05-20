import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsFeedPage from './components/newsfeed/NewsFeedPage';
import HomeContainer from './components/home/HomeContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import { PostCard } from './components/newsfeed/PostCard';
import LoginPage from './components/login/LoginPage';
import PublicProfile from './components/profile/PublicProfile';

const Routes =()=>(
    <Switch>
        <Route path="/newsfeed" component={NewsFeedPage}/>
        {/*<Route exact path="/" component={HomeContainer} />*/}
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/users/:id" component={PublicProfile} />

    </Switch>
);

export default Routes;

