import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { PostCard } from './components/newsfeed/PostCard';


const Routes =()=>(
    <Switch>
        <Route path="/" component={PostCard}/>
    </Switch>
);

export default Routes