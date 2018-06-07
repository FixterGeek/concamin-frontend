import React, { Component } from 'react'
import Chat from '../chatmenu/ChatMenu'
import { Drawer, AppBar, Toolbar, List, MenuItem, TextField, Divider, Typography, ListItem, ListItemText, Avatar } from '@material-ui/core/'
import ImageIcon from '@material-ui/icons/Image'

const conversationList = [
    {
        name: 'Mefit',
        username: 'MefitHp',
        fecha: '',
        _id: "5b032b165353a30014c5e5bd",
        email: 'mefit@gmail.com'
    }
    , {
        name: 'Froggy',
        username: 'Froggy Rocket',
        fecha: '10/10/2018',
        _id: "5b0191489378750014dd6b09",
        email: 'froggy@fixter.org'
    },
    {
        name: 'Oswaldino ',
        username: 'Oswal24k',
        fecha: '10/10/2018',
        _id: "5b0246676c645a0014f9fa9d",
        email: 'oswaldo@fixter.org'
    }
]

class MessengerMain extends Component {
    state = {
    };


    render() {
        return (
            <div>
                <Drawer
                    variant="permanent"
                    anchor='left'
                >
                    <h2 align="center">Conversaciones: </h2>
                    <Divider />
                    <List style={{ width: '300px' }}>{conversationList.map((item, index) => {
                        return <ListItem button key={index} name={item.username} >
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                            <ListItemText primary={item.username} secondary={item.email} />
                        </ListItem>
                    })}</List>
                </Drawer>
            </div>
        )
    }
}

export default MessengerMain;