import React from 'react';
import {TextField, Card, CardHeader, Avatar, CardContent, Typography, CardMedia, CardActions, IconButton, Button} from '@material-ui/core/'
import {InsertPhoto, PictureAsPdf, InsertLink} from '@material-ui/icons/';



const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card:{
        marginBottom:'2%'
    },
    avatar: {
        backgroundColor:'blue',
    },
    actions:{
        display:'flex',
        justifyContent:'space-between'
    }
    
  };


  let elInput;

  function clicki(){
      elInput.click();
  }

  let elFile;

  function clickFile(){
      elFile.click();
  }



export const PostCard = ({handleText, text, image, file, handleSubmit, link, handleChange}) => (
    
    <form onSubmit={handleSubmit}>
        <Card style={styles.card}>
            <CardHeader
                title={<TextField
                    name="text"
                    onChange={handleChange}
                    value={text}
                    id="multiline-flexible"
                    label="Qué estás pensando bro?"
                    fullWidth={true}
                    multiline
                    margin="normal"
                    />}
                 avatar={
                    <Avatar aria-label="Recipe" style={styles.avatar}>
                        O
                 </Avatar>}/>

            {image?<CardMedia
                style={styles.media}
                image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />:''}
            {file?<CardMedia
                style={styles.media}
                image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />:''}
            <CardActions style={styles.actions}>
                <div>
                    <IconButton aria-label="Add to favorites" onClick={clicki}>
                        <input ref={input=>elInput=input} type="file" hidden onChange={handleChange} name="image"/>
                        <InsertPhoto />
                    </IconButton>
                    <IconButton aria-label="Add to favorites" onClick={clickFile}>
                        <input ref={input=>elFile=input} type="file" hidden accept=".pdf" onChange={handleChange} name="file"/>
                        <PictureAsPdf />
                    </IconButton>
                    <IconButton aria-label="Add to favorites">
                        <InsertLink />
                    </IconButton>
                </div>
                <Button variant="raised" color="primary" type="submit">
                    Post
                </Button>
            </CardActions>
        </Card>
    </form>
    
);