import React from 'react';
import { Switch, Route } from 'react-router-dom';


import MainPage from "./components/main/MainPage";
import LoginPage from './components/login/LoginPage';
import HomeContainer from './components/home/HomeContainer';


const Routes = () => (
    <Switch>
       
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/main" component={MainPage}/>
    </Switch>
);

export default Routes;

