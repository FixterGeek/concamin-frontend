import React from 'react';
import {Card, CardHeader,CardContent, Avatar,Divider,Typography,Button,ExpansionPanelSummary,TextField} from '@material-ui/core/';
import {LocationOn} from '@material-ui/icons/';

import {Link} from 'react-router-dom'


const img = "https://las.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/devdiary_gdprinciples_articleheader.jpg?itok=8zfwqH2t"

export const CardGroup =({_id, user, owner={}, members, name, description, subject,cover,revision})=>(
    <Card style={{marginBottom:15}}>
        <div style={{display:'flex'}}>
            <Link to={"/main/groups/detallitogrupito"}>
                <img style={styles.media} src={cover || img}/>
            </Link>
            <CardContent>
                <Typography style={styles.title} color="textSecondary">
                    <Link style={{textDecoration:'none',color:'black'}} to={"/main/groups/" + _id}>{name}</Link>
                </Typography>
                <Typography style={styles.location} color="textSecondary">
                    {description}
                </Typography>


            </CardContent>
        </div>
        <Divider/>
        <CardContent>
            <Typography style={styles.miembros} color="textSecondary">
               {members.length}
            </Typography>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <div style={{display:'flex',justifyContent:'flex-start'}}>
                {members.slice(0,5).map(m=>{
                    return(
                        <Avatar key={m._id}  alt="Remy Sharp" src={m.profilePic} style={styles.avatar} />
                    )
                })}
                {members.length > 5 && <Avatar>
                       <span style={{fontSize:13}}>
                           +{members.length}
                       </span>
                </Avatar>}
                </div>
                {user._id == owner._id && <Button variant="outlined">
                    Invitar
                </Button>}
            </div>

        </CardContent>


    </Card>
)

const styles = {
    media: {

        width:"150px",
        height:"150px",
        //paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor:'red',
        marginRight:"25px"
    },
    cardpadre:{
        marginBottom:'2%'
    },
    botoncito:{
        position: "absolute",
        right: "20px",
        zIndex: 999,
    },
    title:{
        marginBottom: 16,
        fontSize: 16,
    },
    location:{
        fontSize: 14,
    },
    miembros:{
        marginBottom:10,
        fontSize:12
    },
    avatarMiembros:{

    }
};