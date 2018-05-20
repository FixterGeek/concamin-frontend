import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { PostCard } from './components/newsfeed/PostCard';
import NewsFeedPage from './components/newsfeed/NewsFeedPage';


const Routes =()=>(
    <Switch>
        <Route exact path="/" component={PostCard}/>
        <Route path="/newsfeed" component={NewsFeedPage}/>
    </Switch>
);

export default Routes