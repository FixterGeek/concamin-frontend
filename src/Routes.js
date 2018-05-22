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


const Routes = () => (
    <Switch>
        <Route path="/chat" component={Chat} />
        {/* <Route path="/" component={PostCard} /> */}
        <Route path="/newsfeed" component={NewsFeedPage} />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/login" component={LoginPage} />
        <Route path="/users/:id" component={PublicProfile} />
        <Route path="/navbar" component={Navbar}/>


    </Switch>
);

export default Routes;

