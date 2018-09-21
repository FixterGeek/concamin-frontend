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
const foto = "http://www.getfbcovers.com/covers/makes_you_happy_facebook_cover_1437649901.jpg"
let cover;
let coverImage;
export const DetailEvent =({title,event , user,cover=foto, posts, handleSubmit, handleChange, photoPreview, clearFile, newPost, handleLink, addLink, addLinks, clearLink})=>(
    <div className='padding-gral'>
        <Paper style={{minHeight: "379px"}}>
            <div ref={div=>coverImage=div} className='event-img' style={{position:"relative", backgroundImage:`url('${event.cover || cover}')`}}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="data-user">
                    <h4 className="title">{title}</h4>
                </div>
            </div>
        </Paper>
        <div style={{display:'flex',flexDirection:'rows'}}>
            <div >
                <InfoEvent {...event}  />
            </div>


            <div style={{padding:'20px 0 0 50px',width:'100%'}}>
                <NewsFeedComponent
                    user={user}
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