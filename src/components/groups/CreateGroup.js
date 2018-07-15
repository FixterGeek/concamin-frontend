import React from 'react'
import {
    Button,
    Typography,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Slide,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    FormLabel, 
    Paper,
    Select,
    MenuItem
 } from '@material-ui/core/';
import {Close} from '@material-ui/icons/'


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export const CreateGroup =({addItem, subject, onChange,open,close, photoPreview, handleChange, clearFile})=>(
    <Dialog
        style={{backgroundColor:"#eaebec"}}
        fullScreen
        open={open}
        TransitionComponent={Transition}
    >


        <AppBar  color="default"  style={styles.appBar}  >
            <Toolbar>
                <IconButton onClick={close} color="inherit"  aria-label="Close">
                    <Close/>
                </IconButton>
                <Typography variant="title" color="inherit" style={styles.flex}>
                    Nuevo grupo
                </Typography>
            </Toolbar>
        </AppBar><div style={{ backgroundColor:"#eaebec"}}>
        <DialogContent style={styles.content} >
            <Paper style={styles.papel}>
                <Typography style={styles.title} color="textSecondary">
                    Bienvenido
                </Typography>
                <DialogContentText style={styles.note}>
                    Tenga en cuenta que las sugerencias se evalúan cada dos semanas, y pueden o no crearse en función de la superposición con áreas existentes o de interés.
                    Gracias.
                </DialogContentText>
                
                <TextField
                    id="multiline-flexible"
                    label="1. ¿Cuál es el nombre del grupo que deseas crear?"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                    name="name"
                    onChange={onChange}
                />
                <br/>
                <br/>
                <FormLabel component="legend"> 2. ¿Cuál es la temática principal del grupo?</FormLabel>
                <br/>
                <Select value={subject} onChange={onChange} name="subject">
                    <MenuItem value={'Crecimiento profesional'}  >Crecimiento profesional</MenuItem>
                    <MenuItem value={"Intereses sociales y personales"}  >Intereses sociales y personales</MenuItem>
                    <MenuItem value={"Trabajo y colaboración"}  >Trabajo y colaboración</MenuItem>
                    <MenuItem value={"Otros"}  >Otros</MenuItem>
                </Select>
                <TextField
                    id="multiline-flexible"
                    label="3. Escribe una breve descripción"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                    name="description"
                    onChange={onChange}
                />
                <br/>
                <br/>
                <input id="cover" name="cover" onChange={handleChange} type="file" accept="image/*" />
                <img width="100%" src={photoPreview} />
                <button onClick={clearFile} >quitar</button>
          
                

            </Paper>

        </DialogContent></div>
        <DialogActions style={{backgroundColor:'#eaebec',padding:'8px 4px', margin:0}}>
            <Button onClick={close} variant="outlined" color="primary">
                Cancel
            </Button>
            <Button onClick={addItem} variant="outlined"  color="primary">
                Crear
            </Button>
        </DialogActions>
    </Dialog>
);

const styles = {
    appBar: {
        position: 'relative',
        backgroundColor:"white"
    },
    flex: {
        flex: 1,

    },
    papel:{

        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 30,
        paddingBottom: 20
    },
    content:{
        paddingTop:10,
        paddingLeft:50,
        paddingRight:50,
        backgroundColor:'#eaebec',
        width:"50%",
        margin:"0 auto"
    },
    title: {
        marginBottom: 16,
        fontSize: 30,
        display:'flex',
        justifyContent:'center'
    },
    note:{
        color:'black',
        fontweight:'bold'
    }

};