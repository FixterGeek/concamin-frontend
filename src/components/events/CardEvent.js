import React from 'react';
import {Card, CardHeader,CardContent, Avatar,Divider,Typography,ExpansionPanel,ExpansionPanelSummary,TextField} from '@material-ui/core/';
import {LocationOn} from '@material-ui/icons/';
import {CommentBox} from '../newsfeed/CommentBox'
import {Link} from 'react-router-dom'
const styles = {
    media: {

        width:"300px",
        height:"300px",
        //paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor:'red',
        marginRight:"25px"
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
        marginBottom: 16,
        fontSize: 20,
    },
    location:{
        marginTop:"50px",
        fontSize: 18,
    }
};
export const CardEvent =({handleComment})=>(
    <Card>
        <div style={{display:'flex'}}>
            <Link to={"/events/eventito"}>
                <img style={styles.media} src={"https://thegamersports.mundodeportivo.com/wp-content/uploads/2018/05/clash.png"}/>
            </Link>
            <CardContent>
                <CardHeader
                    subheader={"23 de mayo "}
                />

                <Typography style={styles.title} color="textSecondary">
                    <Link style={{textDecoration:'none',color:'black'}} to={"/events/eventito"}>Unete a clash con tu Equipo prediseñado de Lol</Link>
                </Typography>
                <div style={{display:'flex',justifyContent:'flex-start'}}>
                    <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar   alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                    <Avatar alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                </div>
                <Typography style={styles.location} color="textSecondary">
                    <LocationOn/> Fixter House, Hgo.
                </Typography>

            </CardContent>
        </div>


        <ExpansionPanel style={{margin:'0',boxShadow:"none" }}>

            <ExpansionPanelSummary >
                <div style={styles.expansiones}>

                    <Typography arial-label={"Recipe"}> Comentarios</Typography>
                </div>
            </ExpansionPanelSummary>

            <CommentBox />
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
)