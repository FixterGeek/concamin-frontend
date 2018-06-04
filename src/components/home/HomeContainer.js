import React, { Component } from 'react';
import {HomeDisplay} from './HomeDisplay';
import {About} from './About';
import {Descript} from './Descript';
import {Benefits} from './Benefits';
import {Members} from './Members';
import Footer from '../footer/Footer';
//testing chat

class HomeContainer extends Component {

  //testing chats


  render() {
    return (
      <div>
        <HomeDisplay />
        <About />
        <Descript />
          <Benefits />
          <Members />
          <Footer />
      </div>
    );
  }
}

export default HomeContainer;
