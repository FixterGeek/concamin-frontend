import React from 'react';
import {TextField, Card, CardHeader, Avatar, CardContent, Typography, CardMedia, CardActions, IconButton} from '@material-ui/core/'
import {InsertPhoto, PictureAsPdf, InsertLink} from '@material-ui/icons/';



const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
  };



export const PostCard = ({handleText, text, image, file, addFile, addImage, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Card>
            <CardHeader
                title={<TextField
                    onChange={handleText}
                    value={text}
                    id="multiline-flexible"
                    label="Qué estás pensando bro?"
                    fullWidth={true}
                    multiline
                    margin="normal"
                    />}
                 avatar={
                    <Avatar aria-label="Recipe">
                        R
                 </Avatar>}/>

            {image?<CardMedia
                style={styles.media}
                image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />:''}
            {file?<CardMedia
                style={styles.media}
                image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />:''}
            <CardActions>
                <IconButton aria-label="Add to favorites" onCLick={addImage}>
                    <InsertPhoto />
                </IconButton>
                <IconButton aria-label="Add to favorites" onCLick={addFile}>
                    <PictureAsPdf />
                </IconButton>
                <IconButton aria-label="Add to favorites" onCLick={addFile}>
                    <InsertLink />
                </IconButton>
            </CardActions>
        </Card>
    </form>
);