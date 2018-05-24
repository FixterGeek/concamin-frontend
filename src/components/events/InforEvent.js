import React from 'react';
import './events.css';
import {Paper,Divider,Typography,GridList,Avatar} from '@material-ui/core/';
import {AccessTime,LocationOn} from '@material-ui/icons/';


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
    }
}
export const InfoEvent = ({}) => {
    return (
        <div className='about'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>
                <h5>Clash of League</h5>
                <div style={{display:'flex',flexDirection:"column"}}>
                    <Typography style={styles.detallitos} color="textSecondary">
                        <AccessTime/> 10:30Am - 12:00pm
                    </Typography>
                    <Typography style={styles.detallitos} color="textSecondary">
                        <LocationOn/> Fixter House HGO.
                    </Typography>

                </div>

                <Divider />
                <h5>Acerca de</h5>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores deserunt dignissimos mollitia neque placeat,
                    quam quis reprehenderit? A accusamus, assumenda dignissimos,
                    doloremque earum eum, hic libero nesciunt odit quo unde.      </p>
                <Divider />
                <h5>Miembros</h5>
                <div>
                    <GridList cellHeight={160} className={styles.gridList} cols={3}>
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />

                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />

                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />
                        <Avatar  alt="Remy Sharp" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kayn_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414184150" style={styles.avatar} />

                    </GridList>
                </div>

            </Paper>
        </div>
    )
}