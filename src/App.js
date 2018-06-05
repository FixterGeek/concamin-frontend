import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import MainMenu from './components/mainmenu/MainMenu';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className='background-app'>
        {/*<Navbar/>*/}
        {/*<MainMenu/>*/}
        <div className="routes-container">
        <Routes/>
        </div>
      </div>
    );
  }
}

export default App;
