import React, { Component } from 'react'
import {getPosts, addPost} from '../../services/postService';

import {Avatar,Paper,Card,Typography,AppBar,Toolbar,IconButton,TextField,
    CardContent,List,ListItem,ListItemText,Divider} from '@material-ui/core/';
import {MoreVert,AccountCircle} from '@material-ui/icons/'
import {NewsFeedComponent} from '../newsfeed/NewsFeedComponent'


const styles = {
    appBar: {
        position: 'relative',
        boxShadow:'none'
    },
    flex: {
        flex: 1,
    },
    papel:{        
        
        boxShadow:"none",

    },
    content:{
        paddingLeft:50,
        paddingRight:50,
        backgroundColor:'#eaebec'
    },
    title: {
        marginBottom: 16,
        fontSize: 30,
        display:'flex',
        justifyContent:'center'
    },
    note:{
        color:'black',
        fontweight:'bold'
    },
    micomentario:{
        display:'flex',
        alignItems:'center',
        backgroundColor:"rgb(242,243,245)",        
        height:'70px',
        overflowY:'scroll',
        padding:'0px'
    },
    comentaritos:{
        width:'100%',
        backgroundColor:"rgb(242,243,245)",
        padding:'0 0 10 0',
        height:'70px'
    },
    listita:{
        overflowY:'auto',
        height:'calc(100vh - 340px)',
    }


};
class ChatGroup extends Component {
    state={}



    render() {
        let {user}=this.props
        return (
            <Card >
                <AppBar  color="default"  style={styles.appBar}>
                    <Toolbar>

                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Chat de grupo
                        </Typography>
                        <IconButton color="inherit"  aria-label="Close">
                            <MoreVert/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Paper style={styles.papel}>
                    <List component="nav" style={styles.listita}>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <AccountCircle />
                            </Avatar>
                            <ListItemText primary="Dylan Torres" secondary="Hoy es un gran dia para ir a la escuela y disfrutar de un buen dia" />
                        </ListItem>

                    </List>
                </Paper>
                <CardContent style={styles.comentaritos}>
                    <div style={styles.micomentario}>
                        <Avatar arial-label={"Recipe"} style={styles.avatar} src={user ? user.profilePic: null}>
                            {!user?<AccountCircle/>:null}
                        </Avatar>
                        <div style={{marginLeft:"10px",width:'100%'}}>
                            <TextField
                                id="full-width"                                
                                multiline={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Di algo!!"
                                style={{width:'90%'}}
                                margin="normal"
                            />
                        </div>
                    </div>


                </CardContent>

            </Card>




        )
    }
}


export default ChatGroup