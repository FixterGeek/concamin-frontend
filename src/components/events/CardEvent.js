import React from 'react';
import { Card, CardHeader, CardContent, Avatar, Divider, Typography, ExpansionPanel, ExpansionPanelSummary, TextField, Button } from '@material-ui/core/';
import {LocationOn,AccountCircle} from '@material-ui/icons/';
import {CommentBox} from '../newsfeed/CommentBox'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import TrashIcon from '@material-ui/icons/DeleteForever';
import moment from 'moment'
import 'moment/locale/es'

const styles = {
    media: {

        width:"170px",
        height:"170px",
        //paddingTop: '56.25%', // 16:9
    },
    avatar: {
        marginRight:"25px",
        margin: 5,
    },
    cardpadre:{
        marginBottom:'2%'
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
    title:{
        fontSize: 15,
    },
    location:{
        marginTop:"12px",
        fontSize: 14,
    },
    fechita:{
        marginTop:"5px",
        fontSize: 14,
    },
    myavatar:{
        margin: 5,
        height:30,
        width:30,
    }
};

const pic = "https://faranesh.com/images/course/015183a326a8a8cd36a6bb83dba38ddd.jpg"

export const CardEvent =({assist, owner={},removeEvent,user={},cover,_id, title, startDate, endDate, description,location, participants=[]})=>{
    const isAsistant = participants.find(u=>user._id === u._id)
    // console.log(owner, user)
    return(
    <Card 
    style={{marginTop:20}}>
    <CardHeader
        title={<Link to={`/main/events/${_id}`}>{title}</Link>}
        subheader={moment(startDate).format('LLL')}
        action={owner._id === user._id && 
            <IconButton onClick={()=>removeEvent(_id)} >
              <TrashIcon />
            </IconButton>
          }
    />
    
        <div style={{display:'flex'}}>
            <Link to={`/main/events/${_id}`}>
                <img style={styles.media} src={cover || pic}/>
            </Link>
            <CardContent>
                <Typography style={styles.fechita} color="textSecondary">
                    
                </Typography>
                <Typography style={styles.title} color="textSecondary">
                    <Link style={{textDecoration:'none',color:'black'}} to={`/main/events/${_id}`}>
                        {description}
                    </Link>
                </Typography>
                <div style={{display:'flex',justifyContent:'flex-start'}}>
                    <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    {participants.map((p,i)=><Avatar key={i} src={p.profilePic} />)}
                </div>
                <Typography style={styles.location} color="textSecondary">
                    <LocationOn/> {location}
                    <br/>
                    <Button onClick={()=>assist(_id)} variant="outlined" color={ isAsistant ? "secondary" : "primary"} >
                    { isAsistant ? "Ya no iré" : "Asistiré"}
                    </Button>
                </Typography>

            </CardContent>
        </div>


        {/* <ExpansionPanel style={{margin:'0',boxShadow:"none" }}>
            <ExpansionPanelSummary >
                    <Typography arial-label={"Recipe"}> Comentarios</Typography>
            </ExpansionPanelSummary>
            <CommentBox />
        </ExpansionPanel> */}


        {/* <CardContent style={styles.comentaritos}>
            <div style={styles.micomentario}>
                <Avatar arial-label={"Recipe"} style={styles.avatar} src={user ? user.profilePic: null}>
                    {!user?<AccountCircle/>:null}
                </Avatar>
                <div style={{marginLeft:"10px", backgroundColor:'white',width:'100%',borderRadius:'5px'}}>
                    <TextField
                        InputProps={{
                            disableUnderline: true,
                        }}

                        onChange={handleComment}
                        style={{padding:"0 10px",width:"96%"}}
                        id="multiline-flexible"
                        placeholder="Escribe tu humilde opinion!"
                        fullWidth={true}
                        multiline
                        margin="normal"
                        name="commet"
                    />
                </div>
            </div>


        </CardContent> */}

    </Card>
)
    }