import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: { main: '#5d754a' }, // Purple and green play nicely together.
        secondary: { main: '#222' }, // This is just green.A700 as hex.
    },


});




class App extends Component {
  render() {
    return (
      <div className='background-app'>
          <MuiThemeProvider theme={theme}>


        {/*<Navbar/>*/}
        {/*<MainMenu/>*/}
        <div className="routes-container">
        <Routes/>
        </div>
          </MuiThemeProvider>
      </div>
    );
  }
}

//App = withStyles(styles)(App);
export default App;
