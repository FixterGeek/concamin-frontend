import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Chat from '../chatmenu/ChatMenu'
import DetailGroup from '../groups/DetailGroup'
import GroupsPage from '../groups/GroupsPage'
import NewsFeedPage from '../newsfeed/NewsFeedPage'
import ProfileContainer from '../profile/ProfileContainer'
import PublicProfile from '../profile/PublicProfile'
import DetailEventPage from '../events/DetailEventPage'
import EventsPage from '../events/EventsPage'

class RoutesMain extends Component {
  render() {
    return (      
        <Switch>
            <Route exact path="/main" component={NewsFeedPage} />
            <Route path="/main/chat" component={Chat} />    
            <Route path="/main/groups/detallitogrupito" component={DetailGroup} />
            <Route path="/main/groups" component={GroupsPage}/>
            
            <Route path="/main/profile" component={ProfileContainer} />
            
            <Route path="/main/users/:id" component={PublicProfile} />
            {/*<Route path="/navbar" component={Navbar}/>*/}
            <Route path="/main/events/eventito" component={DetailEventPage}/>
            <Route path="/main/events" component={EventsPage}/>
        </Switch>
    )
  }
}
export default RoutesMain
