import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { PostCard} from './components/newsfeed/PostCard';
import { CardDisplay} from './components/newsfeed/CardDisplay';

const Routes =()=>(
    <Switch>
        <Route path="/card" component={CardDisplay}/>
        <Route path="/" component={PostCard}/>

    </Switch>
);

export default Routes