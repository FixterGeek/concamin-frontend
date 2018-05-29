import React from 'react';
import {Card, CardHeader,CardContent, Avatar,Divider,Typography,Button,ExpansionPanelSummary,TextField} from '@material-ui/core/';
import {LocationOn} from '@material-ui/icons/';

import {Link} from 'react-router-dom'
const styles = {
    media: {

        width:"250px",
        height:"250px",
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
        fontSize: 20,
    },
    location:{
        fontSize: 18,
    },
    miembros:{
        marginBottom:10,
        fontSize:12
    },
    avatarMiembros:{

    }
};
export const CardGroup =({handleComment})=>(
    <Card>
        <div style={{display:'flex'}}>
            <Link to={"/"}>
                <img style={styles.media} src={"https://las.leagueoflegends.com/sites/default/files/styles/wide_medium/public/upload/devdiary_gdprinciples_articleheader.jpg?itok=8zfwqH2t"}/>
            </Link>
            <CardContent>
                <Typography style={styles.title} color="textSecondary">
                    <Link style={{textDecoration:'none',color:'black'}} to={"/"}>Lo que los bronces podemos lograr</Link>
                </Typography>
                <Typography style={styles.location} color="textSecondary">
                    Es un gran lugar para compartir información sobre los campeones, torneos y otras cosas
                </Typography>


            </CardContent>
        </div>
        <Divider/>
        <CardContent>
            <Typography style={styles.miembros} color="textSecondary">
               150 Miembros
            </Typography>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <div style={{display:'flex',justifyContent:'flex-start'}}>
                    <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar   alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar alt="Numero de miemrbos" style={styles.avatarMiembros} >+146</Avatar>
                </div>
                <Button variant="outlined">
                    Unete
                </Button>
            </div>

        </CardContent>


    </Card>
)