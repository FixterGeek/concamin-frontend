import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from './components/chatmenu/ChatMenu'
import { PostCard } from './components/newsfeed/PostCard';



const Routes = () => (
    <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={PostCard} />
    </Switch>
);

export default Routes