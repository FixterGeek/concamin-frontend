import React from 'react'
import {Card,CardMedia,CardContent,Typography,Button} from '@material-ui/core/';
import './Advertising.css'
import {Link} from 'react-router-dom';

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardPublicidad:{
        marginBottom:"2%",
       
    },
    content:{

        margin:'0 auto'
    },

};
export const AdCard = ({announces=[]})=>(
    <div className="polli" style={styles.content}>
        <Card>
        <CardContent>
            <Typography>
                Publicidad
            </Typography>
        </CardContent>
        </Card>
        {announces.map((a, key)=>(
            <a href={`//${a.link}`} key={key} style={{color:'black',textDecoration:'none',fontWeight:'bold'}} target={'_blank'}>
                <Card style={styles.cardPublicidad} >

                    <CardMedia
                        style={styles.media}
                        image={a.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {a.title}
                        </Typography>
                        <Typography component="p">
                            {a.body}
                        </Typography>
                    </CardContent>
                </Card>
            </a>
        ))}



    </div>

);