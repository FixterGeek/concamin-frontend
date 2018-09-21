import React from 'react';
import './events.css';
import {Paper,Divider,Typography,GridList,Avatar} from '@material-ui/core/';
import {AccessTime,LocationOn} from '@material-ui/icons/';
import moment from 'moment'
import 'moment/locale/es'


const styles={
    gridList:{
        width: 500,
        height: 450,
    },
    avatar: {
        backgroundColor:'red',
        width: 60,
        height: 60,
        margin: 10,
        padding:0,
    },
    detallitos:{
        marginTop:2,
        display:'flex',
        alignItems:'center'
    },
    sticky :{
    position: "fixed",
    top: 0,
    }
}

export const InfoEvent = ({title, location, description, participants=[], owner, cover, startDate}) => {
    return (
        <div className='about'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>
                <h5>{title}</h5>
                <div style={{display:'flex',flexDirection:"column"}}>
                    <Typography style={styles.detallitos} color="textSecondary">
                    {moment(startDate).format('LLL')}
                        <br/>
                        <AccessTime/> {moment(startDate).fromNow()}
                    </Typography>
                    <Typography style={styles.detallitos} color="textSecondary">
                        <LocationOn/> {location}
                    </Typography>

                </div>

                <Divider />
                <h5>Acerca de</h5>
                <p>  {description}      </p>
                <Divider />
                <h5>Asistentes</h5>
                <div>
                    <GridList cellHeight={160} className={styles.gridList} cols={3}>
                        {participants.map((p,i)=><Avatar key={i} src={p.profilePic} />)}
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />

                    </GridList>
                </div>

            </Paper>
        </div>
    )
} 