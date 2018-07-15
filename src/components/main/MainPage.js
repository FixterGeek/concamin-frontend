import React, { Component } from 'react'
import RoutesMain from './RoutesMain';
import MainMenu from '../mainmenu/MainMenu';
import Navbar from '../Navbar/Navbar';
import Chat from '../chatmenu/ChatMenu'

class MainPage extends Component {

  componentWillMount(){
    if(!localStorage.getItem('user')) this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <Navbar/>
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
