import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export const ChatMenuList = ({ list, users, onAdd }) => (
    <div>
        <List style={{ width: '100%', padding: 0 }}>
            {list.map((list, index) => {
                return <ListItem button key={index} name={list.username}>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary={list.username} secondary={list.email} />
                </ListItem>
            })}

        </List>
    </div>
);