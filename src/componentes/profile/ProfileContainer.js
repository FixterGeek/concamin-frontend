import React, { Component } from 'react';
import './Profile.css';
import {ProfileDisplay} from './ProfileDisplay'; 
import {updateUser, getLoggedUser} from '../../services/userService';
import toastr from 'toastr';


class ProfileContainer extends Component {

  state = {
    user:{},
    editing:false
  }

  componentWillMount(){
    getLoggedUser()
    .then(user=>{
      this.setState({user});
      //toastr.success('Tu perfil se ha actualizado');
    })
    .catch(e=>console.log(e))
  }

  saveProfile = () => {
    updateUser(this.state.user)
    .then(user=>{
      this.setState({user});
      toastr.success('Tu perfil se ha actualizado');
    })
    .catch(e=>console.log(e))
  };

  changeEditing = () => {
    this.setState(state=>{
      return {editing:!state.editing}
    })
  }

  render() {
    const {user, editing} = this.state;
    return (
      <div>
        <ProfileDisplay changeEditing={this.changeEditing} editing={editing} {...user} saveProfile={this.saveProfile} />
      </div>
    );
  }
}

export default ProfileContainer;
;