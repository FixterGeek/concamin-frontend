import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './componentes/home/HomeContainer';
import ProfileContainer from './componentes/profile/ProfileContainer';
import { PostCard } from './components/newsfeed/PostCard';

const Routes =()=>(
    <Switch>
        {/*<Route exact path="/" component={HomeContainer} />*/}
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/" component={PostCard}/>
    </Switch>
);

export default Routes;

