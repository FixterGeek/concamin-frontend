import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export const ChatMenuList = ({ conversationList, users, textInput, onClickChat }) => (
    <div className="chat">
        <List style={{ width: '100%', padding: 0 }}>
            {conversationList
                .filter(listItem => textInput.toLowerCase() === '' || listItem.username.toLowerCase().includes(textInput.toLowerCase()))
                .map((conversation, index) => {
                    return <ListItem button key={index} name={conversation.username} onClick={() => onClickChat(conversation)}>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText primary={conversation.username} secondary={conversation.email} />
                    </ListItem>
                })}
        </List>
    </div>
);