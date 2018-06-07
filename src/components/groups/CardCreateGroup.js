import React from 'react'
import {Card, CardHeader,CardContent, Avatar,Divider,Typography,Button,ExpansionPanelSummary,TextField} from '@material-ui/core/';



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
            
            width:'100%',
    },
    contentPadre:{
        
        margin:'0 auto'
    },
}
export const CardCreateGroup =({onOpen})=>(
    <div style={styles.contentPadre}>
        <Card style={styles.cardpaps}>
            <CardContent style={styles.content}>
                <div style={styles.textito}>
                    <Typography   style={styles.title} color="textSecondary" >
                        Crea un nuevo grupo
                    </Typography>
                    <Typography component="p">
                        Los grupos es el metodo mas facil de econtrar a miebros con los mismos intereses
                    </Typography>
                </div>

                <Button onClick={onOpen} variant="outlined">
                    Nuevo grupo
                </Button>
            </CardContent>
        </Card>
    </div>
);