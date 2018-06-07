import React from 'react';
import {Card, CardHeader,CardMedia,CardContent, Avatar,IconButton,Typography,Badge,TextField,ListItemText,ListItem,List,ListItemIcon} from '@material-ui/core/';
import {MoreVert,PictureAsPdf,ThumbUp,InsertLink} from '@material-ui/icons/';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {CommentBox} from './CommentBox';
import {Link} from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es'


const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor:'red',
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
    }
};
const actions=[];




export const CardDisplay =  ({Ilove,handleComment,user, love, image, body, date,links,file, created_at})=>(


        <Card style={styles.cardpadre}>
            <CardHeader
                avatar={
                    <Avatar arial-label={"Recipe"} style={styles.avatar} src={user.profilePic || null} >
                        {user.profilePic ? null : user.username.charAt(0)}
                    </Avatar>
                }
                title={user.username}
                subheader={moment(created_at).format('LLLL')}
                action={
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
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
                        <a href={`//${link}`} key={key} target="_blank">
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
                    <a href={"/#"} target="_blank" style={{ textDecoration: 'none'}} >
                    <ListItem>
                        <ListItemIcon>
                            <PictureAsPdf />
                        </ListItemIcon>
                        <ListItemText inset primary={file.name} />
                    </ListItem>
                    </a>
                </List>:""}


            <div style={styles.botoncito}>
                {<IconButton aria-label="Add to favorites" style={styles.buttonIcon} onClick={Ilove}>
                    {love >=1 ?
                        <Badge badgeContent={love} color="primary">
                            <ThumbUp />
                        </Badge>:
                        <ThumbUp />
                    }

                </IconButton>}
            </div>
            <ExpansionPanel style={{margin:'0',boxShadow:"none" }}>

                    <ExpansionPanelSummary >
                        <div style={styles.expansiones}>

                            <Typography arial-label={"Recipe"}> Comentarios</Typography>
                        </div>
                    </ExpansionPanelSummary>

                    <CommentBox handleComment={handleComment} />
            </ExpansionPanel>


            <CardContent style={styles.comentaritos}>
                <div style={styles.micomentario}>
                    <Avatar arial-label={"Recipe"} style={styles.avatar}>
                        B
                    </Avatar>
                    <div style={{marginLeft:"10px", backgroundColor:'white',width:'100%',borderRadius:'5px'}}>
                        <TextField
                            InputProps={{
                                disableUnderline: true,

                            }}
                            onChange={handleComment}
                            style={{padding:"0 10px"}}
                            id="multiline-flexible"
                            placeholder="Escribe tu humilde opinion!"
                            fullWidth={true}
                            multiline
                            margin="normal"
                            name="commet"
                        />
                    </div>
                </div>


            </CardContent>


        </Card>
);