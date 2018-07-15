import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IntroDisplay from './IntroDisplay';
import AdminPubliContainer from './publi/AdminPubliContainer';
import {FormPubli} from '../admin/publi/FormPubli';

class RoutesMain extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={IntroDisplay} />
                <Route exact path="/admin/publi" component={AdminPubliContainer} />
                <Route path="/admin/publi/create" component={FormPubli} />

            </Switch>
        )
    }
}
export default RoutesMain;
