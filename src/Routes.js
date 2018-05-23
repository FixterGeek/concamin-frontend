import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from './components/chatmenu/ChatMenu'
import NewsFeedPage from './components/newsfeed/NewsFeedPage';
import HomeContainer from './components/home/HomeContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import { PostCard } from './components/newsfeed/PostCard';
import LoginPage from './components/login/LoginPage';
import PublicProfile from './components/profile/PublicProfile';
import Navbar from "./components/Navbar/Navbar";
import EventsPage from "./components/events/EventsPage"
import {DetailEvent} from "./components/events/DetailEvent";


const Routes = () => (
    <Switch>
        <Route path="/chat" component={Chat} />
        {/* <Route path="/" component={PostCard} /> */}
        <Route path="/newsfeed" component={NewsFeedPage} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/login" component={LoginPage} />
        <Route path="/users/:id" component={PublicProfile} />
        <Route path="/navbar" component={Navbar}/>
        <Route path="/events/eventito" component={DetailEvent}/>
        <Route path="/events" component={EventsPage}/>
        <Route exact path="/" component={HomeContainer} />



    </Switch>
);

export default Routes;

