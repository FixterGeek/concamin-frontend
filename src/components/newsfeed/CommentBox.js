import React from 'react';
import {Card, CardHeader,CardContent,Divider,Avatar,IconButton,Typography} from '@material-ui/core/';
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

    divisioncita:{
      color:'white',
        border:'solid 1px white',
        height:"0px",
    },

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
            <Divider
                light={true}
                     style={styles.divisioncita}/>


        </Card>
    </div>
);