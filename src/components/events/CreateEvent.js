import React from 'react'
import {InsertPhoto,Clear} from '@material-ui/icons/';
import {TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Button,IconButton} from '@material-ui/core/';
import moment from 'moment'


let eventPic;
function clicki(){
    eventPic.click();
}
let date = new Date()

export const CreateEvent =({createEvent,open,close,handleChange,photoPreview,clearFile})=>(
    <div>
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
                            <input id='image' ref={input=>eventPic=input} type="file" hidden onChange={handleChange} name="cover"/>
                            {photoPreview?"Cambiar":"Imagen"}
                            <InsertPhoto/>
                        </Button>
                    </div>
                </div>


                <TextField
                    margin="dense"
                    name="title"
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
                    margin="dense"
                    name="description"
                    label="Descripción"
                    placeholder="¿Qué sucederá en tu evento?"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={styles.margencito}
                />
                <TextField
                    name="startDate"
                    label="Fecha/hora de inicio"
                    onChange={handleChange}
                    type="datetime-local"
                    defaultValue={moment(date).format("YYYY-MM-DD[T]HH:mm")}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={styles.margencito}
                />
                <TextField
                    name="endDate"
                    label="Fecha/hora de finalización"
                    onChange={handleChange}
                    type="datetime-local"
                    defaultValue={moment(date).format("YYYY-MM-DD[T]HH:mm")}
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
                <Button onClick={createEvent} color="primary">
                    Crear
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