import React, { Component } from 'react';

//testing chat
import {getOrCreateChat} from '../../services/firebase';

class HomeContainer extends Component {

  //testing chats
  componentWillMount(){
    getOrCreateChat();
  }

  render() {
    return (
      <div>
        home BlisS
      </div>
    );
  }
}

export default HomeContainer;
;