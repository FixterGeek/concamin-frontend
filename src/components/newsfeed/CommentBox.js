import React from 'react';
import {Card, CardHeader,CardContent,Divider,Avatar,IconButton,Typography} from '@material-ui/core/';
import {MoreHoriz} from '@material-ui/icons/';




const styles = {
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor:'red',
        width:30,
        height:30,
    },
    comentaritos:{
        backgroundColor:"rgb(242,243,245)",

    },

    divisioncita:{
      color:'white',
        border:'solid 1px white',
        height:"0px",
    },
    textito:{
        fontSize:13,
    }

};


export  const CommentBox = ({handleComment,elId})=>(
    <div>

        <Card >

            <CardContent  style={styles.comentaritos}>
                <CardHeader

                    avatar={
                        <Avatar arial-label={"Recipe"} style={styles.avatar}>
                            H
                        </Avatar>
                    }
                    title={<span style={styles.textito}>Hector Bliss</span>}
                    subheader={<span style={styles.textito}> 19, 2018</span>}
                    action={
                        <IconButton>
                            <MoreHoriz/>
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography component="p" style={styles.textito}>
                        La neta yo no usaria a oriana, su historia esta muy chafa...
                    </Typography>
                </CardContent>

            </CardContent>
            <Divider
                light={true}
                     style={styles.divisioncita}/>


        </Card>
    </div>
);