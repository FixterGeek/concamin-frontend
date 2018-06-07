import React, { Component } from 'react'
import RoutesMain from './RoutesMain';
import MainMenu from '../mainmenu/MainMenu';
import Navbar from '../Navbar/Navbar';
import Chat from '../chatmenu/ChatMenu'

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
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
