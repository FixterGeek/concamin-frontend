import React, { Component } from 'react';
import './ChatMenu.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Input from '@material-ui/core/Input';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'


export const ChatAdd = ({ listi, textInput, onChange, close, onClose, onChangeHandler, pushButton, visible, expanded }) => {

    let list = listi
        .filter(a => textInput.toLowerCase() === '' || a.name.toLowerCase().includes(textInput.toLowerCase()))
        .map((a, index) => <ListItem button key={index} onClick={() => onChange(a)}>
            <Avatar>
                <ImageIcon />
            </Avatar>
            <ListItemText primary={a.name} />
        </ListItem>);


    return (

        <ExpansionPanel style={{
            minWidth: '320px',
            position: 'fixed',
            bottom: 0,
            right: 500,
        }} defaultExpanded={expanded} hidden={close}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon onClick={onClose} />} style={{ backgroundColor: 'dimgray' }}>
                <Typography>Nuevo mensaje..</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails style={{ padding: 0 }} >
                <div style={{
                    width: '100%',
                }}>
                    <div style={{ width: '100%', backgroundColor: 'dimgray' }}>
                        <Input style={{ height: 50, flexGrow: 2, paddingLeft: 10, width: '100%' }}
                            value={textInput}
                            onChange={onChangeHandler}
                        />

                    </div>
                    <section style={{ height: '60vh' }}>
                        <List>{list}</List>
                    </section>

                    <button onClick={pushButton} hidden={visible} >perro</button>

                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>

    )
}


