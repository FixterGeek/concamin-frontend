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
        <div style={{padding:'85px 50px 0 350px'}}>
          <RoutesMain/>
        </div>
        <Chat/>
      </div>
    )
  }
}
export default MainPage
