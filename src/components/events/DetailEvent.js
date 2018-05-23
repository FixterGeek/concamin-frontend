import React from 'react'
import {Card, CardHeader,CardContent,CardMedia, Avatar,Divider,Typography,ExpansionPanel,ExpansionPanelSummary,TextField,Paper} from '@material-ui/core/';
import toastr from "toastr";
import "./events.css"


const styles = {
    media: {
        height:0,
        paddingTop: '56.25%', // 16:9
    },
};
const foto = "https://thegamersports.mundodeportivo.com/wp-content/uploads/2018/05/clash.png";
let cover;
let coverImage;
export const DetailEvent =({cover=foto})=>(
    <Paper style={{minHeight: "379px", paddingBottom:"10px"}}>
        <div ref={div=>coverImage=div} className='event-img' style={{position:"relative", backgroundImage:`url('${cover}')`}}/>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div className="data-user">

                    <h4 className="title">Unete a Clash</h4>

            </div>
        </div>
    </Paper>
);