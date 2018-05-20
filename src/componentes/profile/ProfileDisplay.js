import React from 'react';
import './Profile.css';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CameraAlt from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';

export const ProfileDisplay = () => {
    return (
        <div className='padding-gral'>
            <Paper  elevation={4} style={{minHeight: "379px", paddingBottom:"10px"}}>
                <div className='profile-img' style={{position:"relative"}}>
                    <IconButton aria-label="camera" style={{position:"absolute", top:"0", left:"10px", zIndex:"9999", color:"white"}}>
                        <CameraAlt style={{fontSize:"30px"}}/>
                    </IconButton>
                </div>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <div style={{width:"150px", height:"150px", position:"relative", top:"-75px", marginLeft:"75px",}}>
                        <IconButton aria-label="camera" style={{position:"absolute", top:"10", left:"10px", zIndex:"9999", color:"white"}}>
                            <CameraAlt style={{fontSize:"30px"}}/>
                        </IconButton>
                        <Avatar
                            alt="User"
                            src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/32893588_10216503871007215_7637282803905724416_n.jpg?_nc_cat=0&oh=7867ee410eda379ae94e4018ed4a42ba&oe=5B8F3876"
                            style={{width:'150px', height:'150px', border:"3px solid white" }}
                        />
                    </div>
                    <div className="data-user">
                        <input className="title " type="text" value="Brenda Gonzalez Ortega"/>
                        <h4 className="title">BRENDA GONZALEZ ORTEGA</h4>
                        <p>Puesto</p>
                        <p>en <strong>x organizacion</strong></p>
                        <br/>
                        <p><strong className="number">1000</strong> followers</p>
                    </div>
                </div>
                    <div>
                    <Button variant="outlined" color="primary" style={{height:"50px", margin:"0 20px"}} >
                        Guardar
                    </Button>
                    <Button variant="outlined" color="primary" style={{height:"50px", margin:"0 20px"}} >
                       Cancelar
                    </Button>
                    <Button variant="outlined" color="primary" style={{height:"50px", margin:"0 20px"}} >
                        Editar perfil
                    </Button>
                    </div>

                </div>

            </Paper>
        </div>
    )
}