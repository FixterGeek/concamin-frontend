import React from 'react';
import { Switch, Route } from 'react-router-dom';


import MainPage from "./components/main/MainPage";
import LoginPage from './components/login/LoginPage';
import PublicProfile from './components/profile/PublicProfile';
import Navbar from "./components/Navbar/Navbar";
import Messenger from './components/messenger/MessengerMain'

const Routes = () => (
    <Switch>
        <Route path="/chat" component={Chat} />

        {/* <Route path="/" component={PostCard} /> */}
        <Route path="/newsfeed" component={NewsFeedPage} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/login" component={LoginPage} />
        <Route path="/users/:id" component={PublicProfile} />
        <Route path="/navbar" component={Navbar} />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/messenger" component={Messenger} />
    </Switch>
)
export default Routes;

