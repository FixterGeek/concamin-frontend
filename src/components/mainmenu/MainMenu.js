import React, { Component } from 'react'
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core/'
import {Clear, Store, Feedback, Group, Event, ArtTrack, ChromeReaderMode, Favorite, ImportantDevices, Person} from '@material-ui/icons/'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_blanco.png';


class MainMenu extends Component {
  render() {
    return (
        <div className="men">
        <Drawer open={true} variant="permanent" >
            <Link to="/main">

                <div style={{textAlign:"center"}}><img className="logo" src={logo} alt=""/></div>
            </Link>
        <div className="drawer-container">
            <Divider/>
            <List>
               <Link to="/main/profile" className="menu-links">
               <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Perfil" />
                </ListItem>
                </Link>               
            </List>
            <Divider/>
            <List subheader={<ListSubheader>Comunidad</ListSubheader>}>
            <Link to="/main">
                <ListItem button>
                    <ListItemIcon>
                        <ArtTrack />
                    </ListItemIcon>
                    <ListItemText primary="Feed" />
                </ListItem>
                </Link>
                <Link to="/main/groups">
                <ListItem button>
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Grupos" />
                </ListItem>
                </Link>
                <Link to="/main/events">
                <ListItem button>
                    <ListItemIcon>
                        <Event />
                    </ListItemIcon>
                    <ListItemText primary="Eventos" />
                </ListItem>
                </Link>
                <Link to="/main/announcements">
                <ListItem button>
                    <ListItemIcon>
                        <ChromeReaderMode />
                    </ListItemIcon>
                    <ListItemText primary="Anuncios" />
                </ListItem>
                </Link>
            </List> 

            <Divider/>

            <List subheader={<ListSubheader>Servicios</ListSubheader>}>
            <Link to="/main/benefits">
            <ListItem button>
                    <ListItemIcon>
                        <Favorite />
                    </ListItemIcon>
                    <ListItemText primary="Beneficios" />
                </ListItem>
                </Link>
                <Link to="/main/communication">
                <ListItem button>
                    <ListItemIcon>
                        <ImportantDevices />
                    </ListItemIcon>
                    <ListItemText primary="Comunicación" />
                </ListItem>
                </Link>
            </List>
        </div>
        <div>
        <Divider/>
        <Link to="/main/support">
        <ListItem button>
                    <ListItemIcon>
                        <Feedback />
                    </ListItemIcon>
                    <ListItemText primary="Soporte" />
                </ListItem>
                </Link>
        </div>
       
      </Drawer></div>
    )
  }
}
export default MainMenu


