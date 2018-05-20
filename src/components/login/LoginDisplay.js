import React from 'react';
import './Login.css';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const LoginDisplay = () => {


    return (
        <div className='login'>
             <Paper style={{width:"300px", padding:"2%", heigth:"auto"}}>
                    <div className="circle_login">

                    </div>
                 <h3>Bienvenido</h3>
                 <div style={{marginLeft:"30px", color:"#808080 !important"}}>
                     <Grid container spacing={8} alignItems="flex-end" >
                         <Grid item>
                             <AccountCircle />
                         </Grid>
                         <Grid item>
                             <TextField id="input-with-icon-grid" label="Email" />
                         </Grid>
                     </Grid>
                     <Grid container spacing={8} alignItems="flex-end">
                         <Grid item>
                             <AccountCircle />
                         </Grid>
                         <Grid item>
                             <TextField id="input-with-icon-grid" label="Password" />
                         </Grid>
                     </Grid>
                     <br/>

                 </div>
                 <Button variant="raised" color="primary" >
                 Log In
                </Button>

             </Paper>
        </div>
    )
}