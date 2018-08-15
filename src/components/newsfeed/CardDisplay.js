import React from 'react';
import {Card, CardHeader,CardMedia,CardContent, Avatar,IconButton,Typography,Badge,TextField,ListItemText,ListItem,List,ListItemIcon} from '@material-ui/core/';
import {MoreVert,PictureAsPdf,ThumbUp,InsertLink,AccountCircle, Star} from '@material-ui/icons/';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {CommentBox} from './CommentBox';
import {Link} from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es';
import PicDefault from '../../assets/default-avatar.png'





const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor:'#252729',
    },
    cardpadre:{
        marginBottom:'2%',
        position:'relative'
    },
    micomentario:{
        display:'flex',
        alignItems:'center',
        backgroundColor:"rgb(242,243,245)",
        padding: "16px 24px 16px"
    },
    comentaritos:{
        backgroundColor:"rgb(242,243,245)",
        paddingBottom:"0px",
        paddingTop:"0px"
    },
    botoncito:{
        position: "absolute",
        right: "20px",
        zIndex: 999,
    },
    textito:{
        overflow:"hidden"
    }
};
const actions=[];




export const CardDisplay =  ({_id, likes, removePost,user={}, love, image, body, date,links,file, created_at,myUser, postComments=[], getComments, newComment, handleComment, comment, removeComment, likePosts})=>{
    user = user || {username:''};

    //if(!user.username) user.username = "Unknown";
    console.log(postComments)

        return (<Card style={styles.cardpadre}>
            <CardHeader
                avatar={
                    <Link to={`/main/users/${user._id}`}>
                    <Avatar arial-label={"Recipe"} style={styles.avatar} src={user.profilePic || null} >
                        {user.profilePic ? null : user.username.charAt(0)}
                    </Avatar>
                    </Link>
                }
                title={user.username}
                subheader={moment(created_at).fromNow()}
                action={
                    <div>
                    { myUser._id == user._id &&
                        <IconButton>
                            <MoreVert onClick={()=>removePost(_id)} /> 
                        </IconButton>
                    }
                    </div>
                }
            />


            <CardContent style={{paddingTop:'0'}}>
                <Typography component="p">
                    {body}
                </Typography>
            </CardContent>


            {image?<CardMedia
                style={styles.media}
                image={image}
            />:''}


            {links.length <= 0 ?
                "": <List component="nav">
               {links.map((link, key)=>(                    
                        <a href={link.split('.')[0].includes('http') ? link : `//${link}`} key={key} target="_blank">
                        <ListItem button >
                            <ListItemIcon>
                                <InsertLink />
                            </ListItemIcon>
                            <ListItemText inset primary={link} />
                        </ListItem>
                        </a>                    
                ))}
                </List>
            }

            {file ?
                <List>
                    <a href={file} target="_blank" style={{ textDecoration: 'none'}} >
                    <ListItem>
                        <ListItemIcon>
                            <PictureAsPdf />
                        </ListItemIcon>
                        <ListItemText inset primary="Archivo.pdf" />
                    </ListItem>
                    </a>
                </List>:""}


            <div style={styles.botoncito}>
                {<IconButton aria-label="Add to favorites" style={styles.buttonIcon} onClick={()=>likePosts(_id)}>

                    <Badge badgeContent={likes.length}  color="primary" >
                        {likes.includes(myUser._id)?<Star color='secondary'/>:<Star style={{color:'#eaebec'}} />}
                    </Badge>



                </IconButton>}
            </div>
            <ExpansionPanel style={{margin:'0',boxShadow:"none" }}>

                <ExpansionPanelSummary onClick={()=>getComments(_id)}>
                    <Typography arial-label={"Recipe"}> Comentarios</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{display:'block'}}>

                        {postComments.length===0?
                            <Typography arial-label={"Recipe"}> No hay Comentarios</Typography>
                            :postComments.map((c, key)=>(
                                <CommentBox key={key} {...c} removeComment={removeComment} myUser={myUser} postId={_id}/>
                            ))}
                </ExpansionPanelDetails>
            </ExpansionPanel>


            <CardContent style={styles.comentaritos}>
                <div style={styles.micomentario}>
                    <Avatar arial-label={"Recipe"} style={styles.avatar} src={myUser.profilePic ? myUser.profilePic: null}>
                        {!myUser.profilePic &&<AccountCircle/>}
                    </Avatar>
                    <div style={{marginLeft:"10px", backgroundColor:'white',width:'100%',borderRadius:'5px'}}>

                        <TextField
                            InputProps={{
                                disableUnderline: true,
                                input:styles.textito,
                            }}
                            value={comment?comment.body:''}
                            onChange={handleComment}
                            onKeyPress={(event)=>newComment(event,_id)}
                            style={{padding:"5px",width:"96%", margin:0}}
                            id="multiline-flexible"
                            placeholder="Escribe tu humilde opinion!"

                            multiline
                            margin="normal"
                            name="comment"
                        />

                    </div>
                </div>
            </CardContent>


        </Card>)
};