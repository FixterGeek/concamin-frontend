import React from 'react';
import {TextField, Card, CardHeader, Avatar, CardContent, Typography, CardMedia, CardActions, IconButton, Button, Paper, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core/'
import {InsertPhoto, PictureAsPdf, InsertLink, Clear} from '@material-ui/icons/';



const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      position:'relative'
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
    },
    icon:{
        position:'absolute',
        top:0,
        right:0
    },
    paper:{
        position:'relative'
    },
    linkField:{
        padding:'1% 2%',
    }
    
  };


  let profilePic;
  function clicki(){
    profilePic.click();
  }

  let elFile;

  function clickFile(){
      elFile.click();
  }


export const PostCard = ({file, image, text,links, handleSubmit, handleChange, photoPreview, previewFile, clearFile, handleLink, linkFields}) => (
    
    <form onSubmit={handleSubmit}>
        <Card style={styles.card}>
            <CardHeader
                title={<TextField
                    InputProps={{
                        disableUnderline: true,
                    }}
                    value={text}
                    name="text"
                    onChange={handleChange}
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

            {photoPreview?
            <CardMedia style={styles.media} image={photoPreview}>
                <IconButton aria-label="Add to favorites" style={styles.icon} onClick={clearFile}>
                    <Clear />
                </IconButton>
            </CardMedia>:file?
            <CardContent>
                <ListItem>
                    <ListItemIcon>
                        <PictureAsPdf />
                    </ListItemIcon>
                    <ListItemText inset primary={file.name} />
                    <IconButton aria-label="Add to favorites" style={styles.icon} onClick={clearFile}>
                        <Clear />
                    </IconButton>
                </ListItem>

            </CardContent>:''}
                
            
            <CardContent>
            <Typography> Agrega Links</Typography>
                {links.map((link, key)=>(
                    <TextField
                    key={key}
                    style={styles.linkField}
                    name={`links[${key}]`}
                    onChange={handleChange}
                    id="multiline-flexible"
                    margin="normal"
                    />
                ))}
            </CardContent>
        
            
            <CardActions style={styles.actions}>
                <div>
                    <IconButton aria-label="Add to favorites" onClick={clicki} color={photoPreview?"primary":"default"} disabled={file?true:false}>
                        <input id='image' ref={input=>profilePic=input} type="file" hidden onChange={handleChange} name="image"/>
                        <InsertPhoto />
                    </IconButton>
                    <IconButton aria-label="Add to favorites" onClick={clickFile} color={file?"primary":"default"} disabled={photoPreview?true:false}>
                        <input id="file" ref={input=>elFile=input} type="file" hidden accept=".pdf" onChange={handleChange} name="file"/>
                        <PictureAsPdf />
                    </IconButton>
                    <IconButton aria-label="Add to favorites" onClick={handleLink}> 
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