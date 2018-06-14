import React from 'react'
import {InsertPhoto,Clear} from '@material-ui/icons/';
import {TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Button,IconButton} from '@material-ui/core/';
import moment from 'moment'


let eventPic;
function clicki(){
    eventPic.click();
}
let date = new Date()

export const CreateEvent =({open,close,handleChange,photoPreview,clearFile})=>(
    <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Crea un evento</DialogTitle>
            <DialogContent>
                <div>
                    <div style={styles.imagencita}>
                        {photoPreview?
                       <div style={{position:"relative"}}>
                           <img
                               src={photoPreview}
                               style={{width:'500px', height:'190px'}}
                           />
                           <IconButton aria-label="Add to favorites" style={styles.icon} onClick={clearFile}>
                               <Clear />
                           </IconButton>
                       </div>
                        :''}

                        <Button onClick={clicki}  color="primary" style={styles.margencito}>
                            <input id='image' ref={input=>eventPic=input} type="file" hidden onChange={handleChange} name="image"/>
                            {photoPreview?"Cambiar":"Imagen"}
                            <InsertPhoto/>
                        </Button>
                    </div>
                </div>


                <TextField
                    margin="dense"
                    name="name"
                    label="Nombre del evento"
                    placeholder="Agrega un nombre conciso y claro"
                    type="text"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                    style={styles.margencito}
                />
                <TextField
                    margin="dense"
                    name="location"
                    label="Ubicación"
                    placeholder="Incluye un lugar o una dirección"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={styles.margencito}
                />
                <TextField
                    name="date"
                    label="Fecha/hora"
                    onChange={handleChange}
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={styles.margencito}
                />
                <DialogContentText style={styles.textito}>
                    Cuando creas un evento en está Plataforma, se aplican las Políticas de páginas, grupos y eventos.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button  color="primary" onClick={close}>
                    Cancel
                </Button>
                <Button  color="primary">
                    Subscribe
                </Button>
            </DialogActions>

        </Dialog>
    </div>
);

const styles = {
    margencito:{
        marginBottom:'10px'
    },
    textito:{
        fontSize:"13px"
    },
    imagencita:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    icon:{
        backgroundColor:"white",
        position:'absolute',
        top:0,
        right:0,
        opacity: "0.5"
    },
}