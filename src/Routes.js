import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsFeedPage from './components/newsfeed/NewsFeedPage';
import HomeContainer from './componentes/home/HomeContainer';
import ProfileContainer from './componentes/profile/ProfileContainer';
import { PostCard } from './components/newsfeed/PostCard';
import LoginPage from './components/login/LoginPage';

const Routes =()=>(
    <Switch>
        <Route path="/newsfeed" component={NewsFeedPage}/>
        {/*<Route exact path="/" component={HomeContainer} />*/}
        <Route path="/profile" component={ProfileContainer} />

        <Route path="/login" component={LoginPage}/>
        <Route exact path="/" component={PostCard}/>

    </Switch>
);

export default Routes;

