import React from 'react';
import {TextField, Card, CardHeader, Avatar,Input, CardContent,InputAdornment, Collapse, Typography, CardMedia, CardActions, IconButton, Button, Paper, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core/'
import {InsertPhoto, PictureAsPdf, InsertLink, Clear, AddCircle, AccountCircle} from '@material-ui/icons/';


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
        backgroundColor:'#eaebecx',
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
    },
    cardpadding:{
        paddingBottom:'0',
    },
    cardpadding2:{
        paddingTop:'0',
        paddingBottom:'0',
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


export const PostCard = ({user,link, file, image, body,links, handleSubmit, handleChange, photoPreview, previewFile, clearFile, handleLink, addLink, addLinks, clearLink}) => (
    
    <form onSubmit={handleSubmit}>
        <Card style={styles.card}>
            <CardHeader
                style={styles.cardpadding}
                title={<TextField
                    InputProps={{
                        disableUnderline: true,
                    }}
                    value={body}
                    name="body"
                    onChange={handleChange}
                    id="multiline-flexible"
                    label="¡Compartenos tu logro del día!"
                    fullWidth={true}
                    multiline
                    margin="normal"
                    />}
                avatar={
                    <Avatar arial-label={"Recipe"} style={styles.avatar} src={user ? user.profilePic: null}>
                        {!user?<AccountCircle/>:null}
                    </Avatar>
                }
            />
            {photoPreview?
            <CardMedia style={styles.media} image={photoPreview}>
                <IconButton aria-label="Add to favorites" style={styles.icon} onClick={clearFile}>
                    <Clear />
                </IconButton>
            </CardMedia>:file?
            <CardContent style={styles.cardpadding2}>
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

            <Collapse in={addLink} timeout="auto" unmountOnExit>
               <CardContent style={styles.cardpadding2}>
               <Input
                    fullWidth
                    value={link}
                    style={styles.linkField}
                    name={"link"}
                    label="Add a Link"
                    onChange={handleChange}
                    id="multiline-flexible"
                    margin="dense"
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={addLinks}>
                           <AddCircle/>
                          </IconButton>
                        </InputAdornment>
                      }
                />
               </CardContent>
            </Collapse>
        
            <CardContent style={styles.cardpadding2}>
            {links?links.map((link, key)=>(
                
                <ListItem key={key}>                                    
                    <ListItemIcon>
                        <InsertLink />
                    </ListItemIcon>
                    <a href={`//${link}`} key={key} target="_blank">
                        <ListItemText inset primary={link} />
                    </a>
                    <IconButton aria-label="Add to favorites" style={styles.icon} onClick={()=>clearLink(key)}>
                        <Clear />
                    </IconButton>                                    
                </ListItem>
              
            )):''}
            </CardContent>
        
            
            <CardActions style={styles.actions}>
                <div>
                    <IconButton aria-label="Add to favorites" onClick={clicki} color={photoPreview?"primary":"default"} disabled={file?true:false}>
                        <input accept="image/*" id='image' ref={input=>profilePic=input} type="file" hidden onChange={handleChange} name="image"/>
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