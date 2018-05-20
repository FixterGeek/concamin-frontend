import React, { Component } from 'react';
import { ChatMenuList } from './ChatMenuList';
import './ChatMenu.css'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Input from '@material-ui/core/Input';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Create from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import { ChatAdd } from './ChatAdd';

const list = [{
    name: 'mefit',
    fecha: '10/10/1900'
},
{
    name: 'carro',
    fecha: '10/15/2919'
},
{
    name: 'Jose',
    fecha: '8/06/2919'
}, {
    name: 'mefit',
    fecha: '10/10/1900'
},
{
    name: 'carro',
    fecha: '10/15/2919'
},
{
    name: 'Jose',
    fecha: '8/06/2919'
},
{
    name: 'mefit',
    fecha: '10/10/1900'
},
{
    name: 'carro',
    fecha: '10/15/2919'
},
{
    name: 'Jose',
    fecha: '8/06/2919'
}, {
    name: 'mefit',
    fecha: '10/10/1900'
},
{
    name: 'carro',
    fecha: '10/15/2919'
},
{
    name: 'Jose',
    fecha: '8/06/2919'
},
]

class Chat extends Component {
    state = {
        conversationNumber: '3',
        addChat: false,
        onClose: '',


        users: [{
            name: 'mefit',
            fecha: '10/10/1900'
        },
        {
            name: 'carro',
            fecha: '10/15/2919'
        },
        {
            name: 'Jose',
            fecha: '8/06/2919'
        },
        ],
        input: '',
        infoUser: [],
        visible: true,
        close: true,
        expanded: true,
        data: []
    }

    onAdd = () => {
        this.setState({
            close: !this.state.close,
            expanded: true,
        })

    }

    //CHAT ADD

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value,
            data: []
        })
    }
    onChange = (a) => {
        this.setState({
            input: a.name,
            infoUser: a,
            visible: false,
            visible: '',
        })
    }

    pushButton = () => {
        this.setState({
            data: this.state.infoUser,
        })
    }

    onClose = () => {
        this.setState({
            close: true,
            expanded: true
        })
    }
    //END CHAT ADD
    render() {
        return (
            <div>
                <ExpansionPanel style={{
                    minWidth: '320px',
                    margin: 0,
                    position: 'fixed',
                    bottom: 0,
                    right: 25,
                }}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: 'dimgray' }}>
                        <Typography>Mensajes ({this.state.conversationNumber})</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ padding: 0 }} >
                        <div style={{
                            width: '100%',
                        }}>
                            <div className="scroll" style={{ height: '60vh' }}>
                                <ChatMenuList list={list} users={this.state.data} />
                            </div>
                            <div style={{ width: '100%', backgroundColor: 'dimgray', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Input style={{ height: 50, flexGrow: 2, paddingLeft: 10 }}
                                    placeholder="Placeholder"
                                />
                                <Button style={{ marginRight: 5 }} variant="fab" mini color="secondary" aria-label="Create" onClick={this.onAdd}>
                                    <Create />
                                </Button>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ChatAdd
                    listi={this.state.users}
                    textInput={this.state.input}
                    onChange={this.onChange}
                    close={this.state.close}
                    onClose={this.onClose}
                    onChangeHandler={this.onChangeHandler}
                    pushButton={this.pushButton}
                    visible={this.state.visible}
                    hidden={this.state.close}
                    expanded={this.state.expanded}
                />
            </div>
        )
    }
}

export default Chat;