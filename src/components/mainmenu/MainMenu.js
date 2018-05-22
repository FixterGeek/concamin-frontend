import React, { Component } from 'react'
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core/'
import {Clear, Store, Feedback, Group, Event, ArtTrack, ChromeReaderMode, ThumbUp, ImportantDevices, Person} from '@material-ui/icons/'
import {Link} from 'react-router-dom';



class MainMenu extends Component {
  render() {
    return (
        <Drawer open={true} variant="permanent" >
        <div className="logo-container">CONCAMIN</div>
        <div className="drawer-container">
            <Divider/>
            <List>
               <Link to="/profile" className="menu-links">
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
            <Link to="/newsfeed">
                <ListItem button>
                    <ListItemIcon>
                        <ArtTrack />
                    </ListItemIcon>
                    <ListItemText primary="Feed" />
                </ListItem>
                </Link>
                <Link to="/groups">
                <ListItem button>
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Grupos" />
                </ListItem>
                </Link>
                <Link to="/events">
                <ListItem button>
                    <ListItemIcon>
                        <Event />
                    </ListItemIcon>
                    <ListItemText primary="Eventos" />
                </ListItem>
                </Link>
                <Link to="/announcements">
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
            <Link to="/benefits">
            <ListItem button>
                    <ListItemIcon>
                        <ThumbUp />
                    </ListItemIcon>
                    <ListItemText primary="Beneficios" />
                </ListItem>
                </Link>
                <Link to="/communication">
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
        <Link to="/support">
        <ListItem button>
                    <ListItemIcon>
                        <Feedback />
                    </ListItemIcon>
                    <ListItemText primary="Soporte" />
                </ListItem>
                </Link>
        </div>
       
      </Drawer>
    )
  }
}
export default MainMenu


