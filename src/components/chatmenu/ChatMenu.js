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
import {getOrCreateChat, addMessage} from '../../services/chatService';
import toastr from 'toastr';

// const list = [{
//     name: 'mefit',
//     fecha: '10/10/1900'
// },
// {
//     name: 'carro',
//     fecha: '10/15/2919'
// },
// {
//     name: 'Jose',
//     fecha: '8/06/2919'
// }, {
//     name: 'mefit',
//     fecha: '10/10/1900'
// },
// {
//     name: 'carro',
//     fecha: '10/15/2919'
// },
// {
//     name: 'Jose',
//     fecha: '8/06/2919'
// },
// {
//     name: 'mefit',
//     fecha: '10/10/1900'
// },
// {
//     name: 'carro',
//     fecha: '10/15/2919'
// },
// {
//     name: 'Jose',
//     fecha: '8/06/2919'
// }, {
//     name: 'mefit',
//     fecha: '10/10/1900'
// },
// {
//     name: 'carro',
//     fecha: '10/15/2919'
// },
// {
//     name: 'Jose',
//     fecha: '8/06/2919'
// },
// ]

class Chat extends Component {
    state = {
        conversationNumber: '6',
        addChat: false,
        onClose: '',


        users: [{
            name: 'mefit',
            username:'mefit',
            fecha: '10/10/1900',
            _id:"5b036c4dd34e8b469533c096",
            email:'mefit@gmail.com'
        },
        {
            name: 'carro',
            fecha: '10/15/2919'
        },
        {
            name: 'Jose',
            _id:2,
            email:'jose@gmail.com',
            username:'Jose',
            fecha: '8/06/2919'
        },
        ],
        input: '',
        infoUser: [],
        visible: true,
        close: true,
        expanded: true,
        data: [],
        messageInput: '',
        userSelected: null,
        activeChat:{},
        list:[]
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({list:user.following})
    }

    onAddChat = () => {
        this.setState({
            close: !this.state,
            expanded: true
        })
    }

    //CHAT ADD
    handleInput = (e) => {
        // let inputName = e.target.name;
        // let inputValue = e.target.value;
        // let state = this.state;
        // state[inputName] = inputValue;
        // console.log(state)
        let { messageInput } = this.state
        messageInput = e.target.value
        this.setState({ messageInput })
        console.log(messageInput)
    }
    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value,
            data: []
        })
    }

    onClickChat = (a) => {
        console.log(a)
        const mySelf = JSON.parse(localStorage.getItem('user'));
        getOrCreateChat(a._id)
        .then(chat=>{
            console.log("wat ? ", chat);
            this.setState({userSelected:a.name, activeChat:chat})
        })
        .catch(e=>{
            console.log(e);
            toastr.error(e)
        })
        // this.setState({
        //     userSelected: a.name,
        // })
        // console.log(this.state.userSelected)
    }

    addMessage = (e) => {
        //input
        const user = JSON.parse(localStorage.getItem('user'));
        const {activeChat} = this.state;
        const message = {
            user:user._id,
            date: new Date(),
            body:this.state.input
        };
        if(e.key == 'Enter'){
            console.log('orale:', message)
            addMessage(message, activeChat._id)
            .then(chat=>{
                //activeChat.messages.push(message);
                this.setState({activeChat:chat, input:''});
            })
            .catch(e=>{
                console.log(e);
                toastr.error("Inicia sesión : "  + e.statusText)
            });
          }

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
            close: !this.state.close,
        })
    }
    //END CHAT ADD
    render() {
        const {list} = this.state;
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
                                    placeholder="Buscar conversación.."
                                />
                                <Button style={{ marginRight: 5 }} variant="fab" mini color="secondary" aria-label="Create" onClick={this.onAddChat}>
                                    <Create />
                                </Button>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ChatAdd
                input={this.state.input}
                    addMessage={this.addMessage}
                    {...this.state.activeChat}
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
                    userSelected={this.state.userSelected}
                    handleInput={this.onChangeHandler}
                    onClickChat={this.onClickChat}
                />
            </div>
        )
    }
}

export default Chat;