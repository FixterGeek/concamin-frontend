import React from 'react';
import {Card, CardHeader,CardContent,Divider,Avatar,IconButton,Typography,TextField} from '@material-ui/core/';
import {MoreHoriz} from '@material-ui/icons/';




const styles = {
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor:'red',
    },
    comentaritos:{
        backgroundColor:"#dddddd"
    },
    micomentario:{
        display:'flex',
        alignItems:'center',
        backgroundColor:"#dddddd",
        padding: "16px 24px 16px"
    },
    divisioncita:{
      color:'white',
        border:'solid 1px white',
        height:"0px",
    },

};

export  const CommentBox = ({handelComment,})=>(
    <div>
        <Card>
            <CardContent style={styles.comentaritos}>
                <CardHeader
                    avatar={
                        <Avatar arial-label={"Recipe"} style={styles.avatar}>
                            H
                        </Avatar>
                    }
                    title={"Hector Bliss"}
                    subheader={"mayo 19, 2018"}
                    action={
                        <IconButton>
                            <MoreHoriz/>
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography component="p">
                        La neta yo no usaria a oriana, su historia esta muy chafa...
                    </Typography>
                </CardContent>

            </CardContent>
            <Divider light={true}
                     style={styles.divisioncita}/>

            <CardContent style={styles.comentaritos}>
                <div style={styles.micomentario}>
                    <Avatar arial-label={"Recipe"} style={styles.avatar}>
                        B
                    </Avatar>
                    <div style={{marginLeft:"10px", backgroundColor:'white',width:'100%',borderRadius:'5px'}}>
                        <TextField
                            InputProps={{
                                disableUnderline: true,

                            }}
                            onChange={handelComment}
                            style={{padding:"0 10px"}}
                            id="multiline-flexible"
                            placeholder="Escribe tu humilde opinion!"
                            fullWidth={true}
                            multiline
                            margin="normal"
                        />
                    </div>
                </div>


            </CardContent>
        </Card>
    </div>
);