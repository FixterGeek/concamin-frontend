import React, { Component } from 'react'
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from '@material-ui/core/'
import {Clear, Store, Feedback, Group, Event, ArtTrack, ChromeReaderMode, Favorite, ImportantDevices, Person, Message, Description} from '@material-ui/icons/'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_blanco.png';
import './Admin.css';


const styles = {
    root:{
        background:'red'
    }
};


class AdminMenuDisplay extends Component {
    render() {
        return (
            <div className="men">
                <Drawer open={true} variant="permanent"
                        style={styles.root}>
                    <Link to="/admin">

                        <div style={{textAlign:"center"}}><img className="logo" src={logo} alt=""/></div>
                    </Link>
                    <div className="drawer-container">
                        <Divider/>
                        <List>
                            <Link to="/admin" className="menu-links">
                                <ListItem button>
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    <ListItemText primary="CONCAMIN-RED" />
                                </ListItem>
                            </Link>
                        </List>
                        <Divider/>
                        <List subheader={<ListSubheader>Panel</ListSubheader>}>
                        <List>
                            <Link to="/admin/users" className="menu-links">
                                <ListItem button>
                                    <ListItemIcon>
                                        <Person />
                                    </ListItemIcon>
                                    <ListItemText primary="Usuarios" />
                                </ListItem>
                            </Link>
                        </List>

                            <Link to="/admin/groups">
                                <ListItem button>
                                    <ListItemIcon>
                                        <Group />
                                    </ListItemIcon>
                                    <ListItemText primary="Grupos" />
                                </ListItem>
                            </Link>
                            <Link to="/admin/events">
                                <ListItem button>
                                    <ListItemIcon>
                                        <Event />
                                    </ListItemIcon>
                                    <ListItemText primary="Eventos" />
                                </ListItem>
                            </Link>
                            <Link to="/admin/publi">
                                <ListItem button>
                                    <ListItemIcon>
                                        <ChromeReaderMode />
                                    </ListItemIcon>
                                    <ListItemText primary="Anuncios" />
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
export default AdminMenuDisplay;


