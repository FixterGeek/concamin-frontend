import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewsFeedPage from './components/newsfeed/NewsFeedPage';


const Routes =()=>(
    <Switch>
        <Route path="/newsfeed" component={NewsFeedPage}/>
    </Switch>
);

export default Routes