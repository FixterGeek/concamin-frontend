import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core/';
import Routes from './Routes';


class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
