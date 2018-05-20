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


export const CardDisplay =  ({Iliked, image, body})=>(

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
                    {body}
                </Typography>
            </CardContent>


            {image?<CardMedia
                style={styles.media}
                image={image}
            />:''}
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