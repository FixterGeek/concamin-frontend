import React, { Component } from 'react';
import './Profile.css';
import {ProfileDisplay} from './ProfileDisplay'; 

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <ProfileDisplay />
      </div>
    );
  }
}

export default ProfileContainer;
;