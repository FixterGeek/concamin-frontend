import React from 'react'
import {Button,Typography,Dialog,AppBar,Toolbar,IconButton,Slide,DialogContent,DialogContentText,TextField,DialogActions,
 FormLabel, FormGroup, FormControlLabel,Checkbox,Paper } from '@material-ui/core/';
import {Close} from '@material-ui/icons/'

const styles = {
    appBar: {
        position: 'relative',
        backgroundColor:"white"
    },
    flex: {
        flex: 1,

    },
    papel:{
        padding:30,
    },
    content:{
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
function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export const CreateGroup =({open,close})=>(
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
                />
                <br/>
                <br/>
                <FormLabel component="legend"> 2. ¿Cuál es la temática principal del grupo?</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox

                                value="gilad"
                            />
                        }
                        label="Crecimiento profesional"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox

                                value="jason"
                            />
                        }
                        label="Intereses sociales y personales"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox

                                value="antoine"
                            />
                        }
                        label="Trabajo y colaboración"
                    />
                </FormGroup>
                <TextField
                    id="multiline-flexible"
                    label="3. Escribe una breve descripción"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                />
                <br/>
                <br/>
                <FormLabel component="legend"> 4. Cuéntanos sobre ti</FormLabel>

                <TextField
                    id="multiline-flexible"
                    label="Nombre"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="multiline-flexible"
                    label="Compañia"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="multiline-flexible"
                    label="Dirección"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="multiline-flexible"
                    label="E-mail"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                />

            </Paper>

        </DialogContent></div>
        <DialogActions style={{backgroundColor:'#eaebec',padding:'8px 4px', margin:0}}>
            <Button onClick={close} variant="outlined" color="primary">
                Cancel
            </Button>
            <Button  variant="outlined"  color="primary">
                Crear
            </Button>
        </DialogActions>
    </Dialog>
);