import React from 'react';
import './Profile.css';
import Paper from '@material-ui/core/Paper';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CameraAlt from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import {HistoryDisplay} from './HistoryDisplay';

const foto = "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/32893588_10216503871007215_7637282803905724416_n.jpg?_nc_cat=0&oh=7867ee410eda379ae94e4018ed4a42ba&oe=5B8F3876";
let cover;
let profilePic;
let coverImage;
let profileImage;

function preview(input, preview){
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0])
    reader.onload = function () {
        preview.style = `position:relative; background-image:url('${reader.result}')`;
    }
}

function previewAvatar(input, preview){
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0])
    reader.onload = function () {
        console.log(preview)
        preview.src = reader.result;
    }
}

export const ProfileDisplay = ({ changeEditing,editing = false,profilePic, fullName, followers=[], institution, job}) => {
    return (
        <div className='padding-gral'>
            <Paper  elevation={4} style={{minHeight: "379px", paddingBottom:"10px"}}>
                <div ref={div=>coverImage=div} className='profile-img' style={{position:"relative"}}>
                  {editing &&  <IconButton onClick={()=>cover.click()} aria-label="camera" style={{position:"absolute", top:"0", left:"10px", zIndex:"9999", color:"white"}}>
                        <CameraAlt style={{fontSize:"30px"}}/>
                    </IconButton>}
                </div>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <div style={{width:"150px", height:"150px", position:"relative", top:"-75px", marginLeft:"75px",}}>
                        {editing && <IconButton onClick={()=>profilePic.click()} aria-label="camera" style={{position:"absolute", top:"10", left:"10px", zIndex:"9999", color:"white"}}>
                            <CameraAlt style={{fontSize:"30px"}}/>
                        </IconButton>}
                        <img
                            alt={fullName}
                            src={profilePic || foto}
                            ref={div=>profileImage=div}
                            style={{width:'150px', height:'150px', border:"3px solid white", borderRadius:75}} 
                        />
                    </div>
                    <div className="data-user">
                        {editing ? <input className="title " type="text" value={fullName}/> : 
                       
                        <h4 className="title">{fullName}</h4>}

                        <p>{job}</p>
                        {institution ? <p>en <strong>{institution.name} organizacion</strong></p> : null} 
                        <br/>
                        <p><strong className="number">{followers.length}</strong> followers</p>
                    </div>
                </div>
                    <div>
                        {editing ?
                        <div>
                        <Button variant="outlined" color="primary" style={{height:"50px", margin:"0 20px"}} >
                            Guardar
                        </Button>
                        <Button onClick={()=>{
                            changeEditing();
                            window.location.reload();
                        }} variant="outlined" color="primary" style={{height:"50px", margin:"0 20px"}} >
                        Cancelar
                        </Button>
                        </div> :
                        <Button onClick={changeEditing} variant="outlined" color="primary" style={{height:"50px", margin:"0 20px"}} >
                            Editar perfil
                        </Button>
                     }
                  
                    </div>

                </div>

            </Paper>
            <HistoryDisplay />

            <input onChange={()=>preview(cover, coverImage)} ref={input=>cover=input}  name="cover" type="file" hidden/>
            <input onChange={()=>previewAvatar(profilePic, profileImage)} ref={input=>profilePic=input} name="profilePic" type="file" hidden/>
        </div>
    )
}