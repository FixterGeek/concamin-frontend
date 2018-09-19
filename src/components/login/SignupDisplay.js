import React from 'react';
import './Login.css';
import Paper from '@material-ui/core/Paper';
import {AccountCircle, Email, Security} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from '../../assets/aniver.png';
import {Link} from 'react-router-dom';


export const SignupDisplay = ({error, onSubmit, changeToSignup}) => {


    return (
        <div className="login">

            <div className="menu" style={{color:"white", position:"fixed"}}>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <div className="box_men">
                    <hr className="line"/>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </div>
            </div><div className='login_box'>

        <form  onSubmit={onSubmit}>
             <Paper style={{width:"300px", padding:"4%", heigth:"auto"}}>
                    <div className="circle_login">
                        <img src={logo} alt=""/>

                    </div>
                 <h3>Crea tu cuenta</h3>
                 <div style={{marginLeft:"30px", color:"#808080 !important"}}>
                    <Grid container spacing={8} alignItems="flex-end" >
                         <Grid item>
                             <AccountCircle />
                         </Grid>
                         <Grid item>
                             <TextField required name="username" label="Nombre de usuario" />
                         </Grid>
                     </Grid>
                     
                     <Grid container spacing={8} alignItems="flex-end" >
                         <Grid item>
                             <Email />
                         </Grid>
                         <Grid item>
                             <TextField 
                             type="email"
                             required name="email" label="Email" />
                         </Grid>
                     </Grid>

                     <Grid container spacing={8} alignItems="flex-end">
                         <Grid item>
                             <Security />
                         </Grid>
                         <Grid item>
                             <TextField 
                                required
                                type="password" 
                                name="password" 
                                label="Password" />
                         </Grid>
                     </Grid>

                    <Grid container spacing={8} alignItems="flex-end">
                         <Grid item>
                             <Security />
                         </Grid>
                         <Grid item>
                             <TextField 
                                required
                                type="password" 
                                name="password2" 
                                label="Repite tu password"
                                />
                                <p style={{color:"red"}}>{error}</p>
                         </Grid>
                     </Grid>

                     <br/>

                 </div>

                 <button className="btn_login" type={"submit"} >
                        Registrarme
                 </button>

                <p>¿Ya tienes cuenta? Ingresa <a href="#!" onClick={changeToSignup}><strong style={{textDecoration:"underline", color:"#648943"}}>aquí</strong></a></p>

             </Paper>
             </form>
        </div>
        </div>
    )
}