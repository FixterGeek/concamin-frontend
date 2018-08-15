import React, { Component } from 'react';
import {HomeDisplay} from './HomeDisplay';
import {About} from './About';
import {Descript} from './Descript';
import {Benefits} from './Benefits';
import Members from './Members';
import Footer from '../footer/Footer';
//testing chat
import Button from '@material-ui/core/Button';

class HomeContainer extends Component {

  //testing chats
    componentDidMount () {
        window.scroll(0, 0)
    }

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
