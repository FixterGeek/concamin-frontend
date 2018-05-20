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

  onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const {user} = this.state;
    user[field] = value;
    this.setState({user});
  };

  componentWillMount(){
    getLoggedUser()
    .then(user=>{
      this.setState({user});
      //toastr.success('Tu perfil se ha actualizado');
    })
    .catch(e=>console.log(e))
  }

  saveProfile = (cover, profilePic) => {
    //const {user} = this.state;
    const user = {};
    user['username'] = this.state.user.username;
    user['cover'] = cover.files[0];
    user['profilePic'] = profilePic.files[0];
    updateUser(user)
    .then(user=>{
      this.setState({user, editing:false});
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
        <ProfileDisplay onChange={this.onChange} changeEditing={this.changeEditing} editing={editing} {...user} saveProfile={this.saveProfile} />
      </div>
    );
  }
}

export default ProfileContainer;
;