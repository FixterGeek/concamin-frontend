import React from 'react'
import ImageIcon from '@material-ui/icons/Image'
import { DialogTitle, Dialog, List, ListItem, Avatar, ListItemText, Input } from '@material-ui/core'

export const AddChat = ({ open, onClose, followers, followerInput, onChangeHandler, onClickChat }) => (
    <Dialog onClose={onClose} open={open} aria-labelledby="simple-dialog-title" >
        <DialogTitle id="simple-dialog-title">Nueva conversación..</DialogTitle>
        <div style={{ width: '80vh', height: '50vh', overflowY: 'scroll' }}>
            <List>{followers
                .filter(listItem => followerInput.toLowerCase() === '' || listItem.username.toLowerCase().includes(followerInput.toLowerCase()))
                .map((item, index) => {
                    console.log(item)
                    return <ListItem button key={index} name={item.username} onChange={() => this.onChange(item)} onClick={() => { onClickChat(item); onClose(); }} >
                        {item.profilePic ?
                            <Avatar src={item.profilePic} />
                            :
                            <ImageIcon />
                        }
                        <ListItemText primary={item.username} secondary={item.email} />
                    </ListItem>
                })}
            </List>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Input style={{ height: 50, flexGrow: 2, paddingLeft: 10, width: '100%', backgroundColor: 'white' }}
                    value={followerInput}
                    onChange={onChangeHandler}
                    placeholder="Buscar una persona"
                />
            </div>
            <button style={{ float: 'right' }} onClick={onClose}>Cerrar</button>
        </div>
    </Dialog>
);