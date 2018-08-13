import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IntroDisplay from './IntroDisplay';
import AdminPubliContainer from './publi/AdminPubliContainer';
import {FormPubli} from './publi/FormPubli';
import AdminUsers from './AdminUsers';
import AdminGroups from './AdminGroups';
import AdminEvents from './AdminEvents';

class RoutesMain extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={IntroDisplay} />
                <Route path="/admin/users" component={AdminUsers}/>
                <Route path="/admin/groups" component={AdminGroups}/>
                <Route path="/admin/events" component={AdminEvents}/>
                <Route exact path="/admin/publi" component={AdminPubliContainer} />
                <Route path="/admin/publi/create" component={FormPubli} />
            </Switch>
        )
    }
}
export default RoutesMain;
