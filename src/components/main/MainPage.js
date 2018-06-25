import React, { Component } from 'react'
import RoutesMain from './RoutesMain';
import MainMenu from '../mainmenu/MainMenu';
import Navbar from '../Navbar/Navbar';
import Chat from '../chatmenu/ChatMenu';
import {getLoggedUser} from "../../services/userService";

class MainPage extends Component {
    logOut=()=>{
        this.props.history.push('/');
    };

    componentDidMount(){
        getLoggedUser()
            .then(user=>{
                //toastr.success('Tu perfil se ha actualizado');
            })
            .catch(e=>{
                this.props.history.push('/login')
                localStorage.removeItem("user");
                console.log(e)
            })
    }

    render() {
    return (
      <div>
        <Navbar logOut={this.logOut}/>
        <MainMenu/>
        <div style={{padding:'85px 30px 0 320px'}}>
          <RoutesMain/>
        </div>
        <Chat/>
      </div>
    )
  }
}
export default MainPage
