import React, { Component } from 'react'
import RoutesMain from './RoutesMain';
import MainMenu from '../mainmenu/MainMenu';
import Navbar from '../Navbar/Navbar';
import Chat from '../chatmenu/ChatMenu'

class MainPage extends Component {
    logOut=()=>{
        this.props.history.push('/');
    };
  render() {
    return (
      <div>
        <Navbar logOut={this.logOut}/>
        <MainMenu/>        
        <div style={{padding:'85px 30px 0 280px'}}>
          <RoutesMain/>
        </div>
        <Chat/>
      </div>
    )
  }
}
export default MainPage
