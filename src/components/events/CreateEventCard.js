import React from 'react'
import {Card,CardContent, Avatar,Divider,Typography,Button,ExpansionPanelSummary,TextField} from '@material-ui/core/';



const styles ={
    title:{
        marginBottom: 16,
        fontSize: 14,
    },
    content:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    textito:{
        marginBottom:10,
    },
    cardpaps:{

        marginBottom:"2%",
        minWidth:275,
        width:320,
    },
    contentPadre:{
        padding:"0 10px",
        margin:'0 auto'
    },
}
export const CreateCardEvent =({onOpen})=>(
    <div style={styles.contentPadre}>
        <Card style={styles.cardpaps}>
            <CardContent style={styles.content}>
                <div style={styles.textito}>
                    <Typography   style={styles.title} color="textSecondary" >
                        Crea un nuevo evento
                    </Typography>
                    <Typography component="p">
                        Crea un evento para que puedas organizarte con personas de tu mismo giro.
                    </Typography>
                </div>

                <Button onClick={onOpen} variant="outlined">
                    Nuevo evento
                </Button>
            </CardContent>
        </Card>
    </div>
);