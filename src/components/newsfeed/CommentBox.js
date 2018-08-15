import React from 'react';
import {Card, CardHeader,CardContent,Divider,Avatar,IconButton,Typography, Menu, MenuItem} from '@material-ui/core/';
import {MoreHoriz, Delete, Close} from '@material-ui/icons/';
import moment from 'moment'




const styles = {
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor:'#252729',
        width:30,
        height:30,
    },
    comentaritos:{
        backgroundColor:'#f2f3f5',
        padding:10,

    },

    divisioncita:{
      color:'white',
        border:'solid 1px white',
        height:"0px",
    },
    textito:{
        fontSize:13,
    }

};


export  const CommentBox = ({_id, body, user, created_at, removeComment, myUser, postId})=>(


        <Card style={{padding:'0', width:'100%', marginBottom:'5px'}}>
            <CardContent  style={styles.comentaritos}>
                <CardHeader
                    style={{padding:'0'}}
                    avatar={
                        <Avatar arial-label={"Recipe"} style={styles.avatar}>
                            {user.profilePic ? null : user.username.charAt(0)}
                        </Avatar>
                    }
                    title={<span style={styles.textito}>{user?user.username:''}</span>}
                    subheader={<span style={styles.textito}> {moment(created_at).fromNow()}</span>}
                    action={
                        <span>
                            {myUser._id===user._id?
                            <IconButton>
                                <Close onClick={()=>removeComment(_id, postId)}/>
                            </IconButton>:''}
                        </span>

                    }
                />
                <CardContent style={{padding:'0'}}>
                    <Typography component="p" style={styles.textito}>
                        {body}
                    </Typography>
                </CardContent>

            </CardContent>



        </Card>
);