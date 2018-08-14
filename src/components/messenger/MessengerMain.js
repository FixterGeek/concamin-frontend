import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Input, Button, Drawer, Divider, ListItem, Avatar, ListItemText, AppBar, Toolbar, List, MenuItem, TextField, Typography, Paper } from '@material-ui/core';
import { Create } from '@material-ui/icons'
import { getOrCreateChat, addMessage } from '../../services/chatService';
import ImageIcon from '@material-ui/icons/Image'
import { AddChat } from './AddChat'
import { animateScroll } from "react-scroll"
import './Messenger.css';
import toastr from 'toastr';
import logo from '../../assets/aniver.png'
import {Link} from 'react-router-dom';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});
const conversationList = [
    {
        name: 'Mefit',
        username: 'MefitHp',
        fecha: '',
        _id: "5b032b165353a30014c5e5bd",
        email: 'mefit@gmail.com',
        profilePic: 'https://pbs.twimg.com/profile_images/962430368933711874/Awj2hzIO_400x400.jpg'
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
    }, {
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
    },
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
    },
]

class PermanentDrawer extends React.Component {
    state = {
        anchor: 'left',
        conversationsInput: '',
        followerInput: '',
        userSelected: null,
        open: false,
        followerList: [],
        infoUser: [],
        messageInput: '',
        activeChat: {}
    };

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ followerList: user.following })
        console.log(user);
    }


    handleClickOpen = () => {
        this.setState({
            open: true,
        });
        console.log(this.state.open);

    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    }

    onChangeHandler = (e) => {
        this.setState({
            followerInput: e.target.value,
            data: []
        })
        console.log(this.state.data);
    }

    onChangeConversations = (e) => {
        this.setState({
            conversationsInput: e.target.value,
            data: []
        })
        console.log(this.state.conversationsInput);
    }

    onChange = (follower) => {
        this.setState({
            input: follower.name,
            infoUser: follower,
        })
        console.log(this.state.infoUser)
    }

    onClickChat = (follower) => {
        getOrCreateChat(follower._id)
            .then(chat => {
                this.setState({ userSelected: follower.username, activeChat: chat })
            })
            .catch(e => {
                console.log(e);
                toastr.error(e)
            })
        console.log(follower.id)
    }

    handleInput = (e) => {
        let { messageInput } = this.state
        messageInput = e.target.value
        this.setState({ messageInput })
    }

    scrollToBottom = () => {
        animateScroll.scrollToBottom({
            containerId: "chatWindow"
        })
    }

    addMessage = (e) => {
        //input
        const user = JSON.parse(localStorage.getItem('user'));
        const { activeChat } = this.state;
        const message = {
            user: user._id,
            date: new Date(),
            body: this.state.messageInput
        };
        if (e.key === 'Enter') {
            console.log('orale:', message)
            addMessage(message, activeChat._id)
                .then(chat => {
                    //activeChat.messages.push(message);
                    this.setState({ activeChat: chat, messageInput: '' });
                    animateScroll.scrollToBottom({
                        containerId: "chatWindow"
                    })
                })
                .catch(e => {
                    console.log(e);
                    toastr.error("Inicia sesión : " + e.statusText)
                });
        }

    }

    render() {
        const { classes } = this.props;
        const { anchor } = this.state;

        const drawer = (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor={anchor}
                style={{ position: 'relative' }}
            >
                <div style={{width:"100px", margin:"0 auto"}}>
                    <Link to="/main">
                        <img style={{width:"100%"}} src={logo} alt=""/>
                    </Link>
                </div>
                <Divider />
                <div style={{ width: '300px' }} >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Input style={{ height: 50, flexGrow: 2, paddingLeft: 10, width: '100%', backgroundColor: 'white' }}
                            value={this.state.conversationsInput}
                            onChange={this.onChangeConversations}
                            placeholder="Buscar una conversacion"
                        />
                        <Button style={{ marginRight: 5 }} variant="fab" mini color="secondary" aria-label="Create" onClick={this.handleClickOpen}>
                            <Create />
                        </Button>
                        <AddChat
                            open={this.state.open}
                            onClose={this.handleClose}
                            followers={this.state.followerList}
                            followerInput={this.state.followerInput}
                            onChangeHandler={this.onChangeHandler}
                            onClickChat={this.onClickChat}
                        />
                    </div>
                </div>
                {conversationList.length > 0 ?
                    <div className="overflow">
                        <List style={{ width: '300px' }}>{conversationList
                            .filter(listItem => this.state.conversationsInput.toLowerCase() === '' || listItem.username.toLowerCase().includes(this.state.conversationsInput.toLowerCase()))
                            .map((item, index) => {
                                return <ListItem button key={index} name={item.username} onChange={() => this.onChange(item)} onClick={() => this.onClickChat(item)} >
                                    {item.profilePic ?
                                        <Avatar src={item.profilePic} />
                                        :
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    }
                                    <ListItemText primary={item.username} secondary={item.email} />
                                </ListItem>
                            })}
                        </List>
                    </div> :
                    <div style={{ overFlowY: 'scroll' }}>
                        <h2> No hay conversaciones </h2>
                    </div>
                }
            </Drawer>
        );

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }
        const localUser = JSON.parse(localStorage.getItem('user'));
        return (

            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
                    >
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap>
                                Mensajes
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {before}
                    <main className={classes.content} style={{ backgroundColor: '#eee' }}>
                        {
                            this.state.activeChat.messages ?
                                <div>
                                    componentDidMount () {
                                    window.scroll(0, 0)
                                }
                                    <div id="chatWindow" style={{ overflowY: 'scroll', width: '100%', maxHeight: '80vh', borderRadius: '10px', backgroundColor: 'white', marginBottom: '10px' }}>
                                        {this.state.activeChat.messages.map((m, index) => {
                                            if (m.user == localUser._id) {
                                                return (
                                                    <Paper key={index} style={{maxWidth: '60vh', padding: '10px', margin: '5px 5px', display:"flex", fontFamily:"Proxima Nova"}}>
                                                        <Avatar style={{margin:"0 5px"}}>
                                                            <img src={m.profilePic} alt="profile" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                                        </Avatar>
                                                        <div style={{display:"flex", alignItems:"center"}}>
                                                        {m.body}
                                                        </div>
                                                    </Paper>


                                                )
                                            } else {
                                                return (
                                                    <Paper key={index} style={{ maxWidth: '100vh', padding: '10px', margin: '5px 5px' }}>
                                                        <span>{m.body}</span>
                                                    </Paper>
                                                )
                                            }
                                        })
                                        }</div>
                                    <div style={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Input value={this.state.messageInput} onKeyPress={this.addMessage} style={{ height: 50, flexGrow: 2, paddingLeft: 10 }} name="messageInput" onChange={this.handleInput}
                                            placeholder="Escribe un mensaje.."
                                        />
                                    </div>
                                </div>
                                :
                                <div>
                                    Seleccione una conversación.
                                </div>
                        }
                    </main>
                    {after}
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(PermanentDrawer);