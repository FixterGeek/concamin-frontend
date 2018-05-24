import React from 'react'
import {Paper} from '@material-ui/core/';
import toastr from "toastr";
import "./events.css"
import {InfoEvent} from "./InforEvent";
import {NewsFeedComponent} from "../newsfeed/NewsFeedComponent";


const styles = {
    media: {
        height:0,
        paddingTop: '56.25%', // 16:9
    },

};
const foto = "https://thegamersports.mundodeportivo.com/wp-content/uploads/2018/05/clash.png";
let cover;
let coverImage;
export const DetailEvent =({cover=foto, posts, handleSubmit, handleChange, photoPreview, clearFile, newPost, handleLink, addLink, addLinks, clearLink})=>(
    <div className='padding-gral'>
        <Paper style={{minHeight: "379px", paddingBottom:"10px"}}>
            <div ref={div=>coverImage=div} className='event-img' style={{position:"relative", backgroundImage:`url('${cover}')`}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="data-user">
                    <h4 className="title">Unete a Clash</h4>
                </div>
            </div>
        </Paper>
        <div style={{display:'flex',flexDirection:'rows'}}>

                <InfoEvent/>
            <div style={{margin:'30px',width:'70%'}}>
                <NewsFeedComponent
                    posts={posts}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    photoPreview={photoPreview}
                    newPost={newPost}
                    handleLink={handleLink}
                    addLink={addLink}
                    addLinks={addLinks}
                    clearLink={clearLink}
                    clearFile={clearFile}/>
            </div>



        </div>


    </div>

);