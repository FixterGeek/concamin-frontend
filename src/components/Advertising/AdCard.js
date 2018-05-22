import React from 'react'
import {Card,CardMedia,CardContent,Typography,Button} from '@material-ui/core/';
import {Link} from 'react-router-dom';

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardPublicidad:{
        marginBottom:"2%",
        minWidth:275,
        width:320,
    },
    content:{
        padding:"0 10px",
       margin:'0 auto'
    },

};
export const AdCard = ({ejemplo})=>(
    <div style={styles.content}>
        <Link style={{color:'black',textDecoration:'none',fontWeight:'bold'}} to={"#"}>
            <Card style={styles.cardPublicidad} >
                <CardContent>
                    <Typography>
                        Publicidad
                    </Typography>
                </CardContent>
                <CardMedia
                    style={styles.media}
                    image={"http://www.tiritas.es/wp-content/uploads/2016/02/espacios-naturales-bicicleta-en-familia-tiritas.png"}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Bicicletas Bara
                    </Typography>
                    <Typography component="p">
                        Compra y diviertete con una bicileta bien chingona podras hacer ejercicio ve... de verdad
                    </Typography>
                </CardContent>
            </Card>
        </Link>


    </div>

);