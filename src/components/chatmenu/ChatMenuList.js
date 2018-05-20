import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export const ChatMenuList = ({ list, users }) => (
    <div>
        {console.log("USERS", users)}
        <List style={{ width: '100%', padding: 0 }}>

            {list.map((list, index) => {
                return <ListItem button key={index} >
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary={list.name} secondary={list.fecha} />
                </ListItem>
            })}

        </List>
    </div>
);