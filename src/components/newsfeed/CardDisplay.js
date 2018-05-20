import React from 'react';
import {Card, CardHeader,CardMedia,CardContent,CardActions, Avatar,IconButton,Typography,Button,TextField} from '@material-ui/core/';
import {MoreVert,Favorite,MoreHoriz} from '@material-ui/icons/';
import {CommentBox} from './CommentBox';

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor:'red',
    },
    cardpadre:{
        marginBottom:'2%'
    }
};


export const CardDisplay =  ({Iliked})=>(

        <Card style={styles.cardpadre}>
            <CardHeader
                avatar={
                    <Avatar arial-label={"Recipe"} style={styles.avatar}>
                        B
                    </Avatar>
                }
                title={"Brenda Ortega"}
                subheader={"mayo 19, 2018"}
                action={
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                }
            />


            <CardContent>
                <Typography component="p">
                    Había una vez un hombre de Piltóver llamado Corin Reveck, que tenía una hija de nombre Orianna a la que quería más que a nada en el mundo. Pese a que Orianna poseía un talento increíble para el baile, se sentía fascinada por los campeones de League of Legends. Esa fascinación la impulsó a comenzar un entrenamiento para llegar a ser una campeona. Desgraciadamente, su ingenuidad la impulsó a tomar riesgos innecesarios que acabarían desembocando en una muerte trágica. El fallecimiento de Orianna destrozó a Corin, sumiéndolo en una profunda depresión que le llevó a obsesionarse con la tecmaturgia. Incapaz de soportar el vacío que su hija había dejado en su vida, decidió configurar un reemplazo; uno que pudiese hacer realidad el sueño de Oriana de unirse a League. Lo que creó fue una máquina de matar con un mecanismo de relojería, a la que Corin llamó como su hija. A sabiendas de que estaba destinada a convertirse en una campeona y, viendo cómo estaban cambiando los tiempos, creó La Bola para que actuase como su mascota y protectora. Como creación pseudosimbiótica que es, usa un tipo diferente de tecmaturgia que se centra más en la electricidad que de los mecanismos de relojería.
                </Typography>
            </CardContent>


            <CardMedia
                style={styles.media}
                image="https://lan.leagueoflegends.com/sites/default/files/styles/scale_xlarge/public/upload/winter_wonder_orianna_splash_1920.jpg?itok=AkN3g4GH"
            />
            <CardActions>
                <IconButton aria-label="Add to favorites" style={styles.buttonIcon} onClick={Iliked}>
                    <Favorite />
                </IconButton>
                <Button arial-label={"Recipe"}>
                    Comentarios
                </Button>
            </CardActions>

           <CommentBox/>

        </Card>
);