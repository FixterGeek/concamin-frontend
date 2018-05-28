import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export const ChatMenuList = ({ followerList, users, onAdd }) => (
    <div>
        <List style={{ width: '100%', padding: 0 }}>
            {followerList.map((followerList, index) => {
                return <ListItem button key={index} name={followerList.username}>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary={followerList.username} secondary={followerList.email} />
                </ListItem>
            })}

        </List>
    </div>
);