import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import MainMenu from './components/mainmenu/MainMenu';


class App extends Component {
  render() {
    return (
      <div className='background-app'>
        <MainMenu/>
        <div className="routes-container">
        <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
