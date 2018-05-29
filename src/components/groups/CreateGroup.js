import React,{Component} from 'react'
import {Button,Typography,Dialog,AppBar,Toolbar,IconButton,Slide,DialogContent,DialogContentText,TextField,DialogActions,
 FormLabel,FormControl, FormGroup, FormControlLabel, FormHelperText,Checkbox } from '@material-ui/core/';
import {Close} from '@material-ui/icons/'

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};
function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export const CreateGroup =({open,close})=>(
    <Dialog
        fullScreen
        open={true}
        onClose={close}
        TransitionComponent={Transition}
    >
        <AppBar style={styles.appBar}>
            <Toolbar>
                <IconButton color="inherit"  aria-label="Close">
                    <Close/>
                </IconButton>
                <Typography variant="title" color="inherit" style={styles.flex}>
                    Nuevo grupo
                </Typography>
            </Toolbar>
        </AppBar>
        <DialogContent>
            <DialogContentText>
                Bienvenido a formulario de creacion de grupo de Concamin
            </DialogContentText>
            <DialogContentText>
                Tenga en cuenta que las sugerencias se evalúan cada dos semanas, y las sugerencias pueden o no crearse en función de la superposición con áreas existentes o de interés
            </DialogContentText>
            <DialogContentText>
                Gracias
            </DialogContentText>
            <TextField
                id="multiline-flexible"
                label="1. ¿Qué grupos desea crear y facilitar?"
                multiline
                rowsMax="4"
                margin="normal"
                fullWidth
            />
            <FormLabel component="legend">¿Prefiere más grupos enfocados en el crecimiento profesional?</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox

                            value="gilad"
                        />
                    }
                    label="Un crecimiento más profesional"
                />
                <FormControlLabel
                    control={
                        <Checkbox

                            value="jason"
                        />
                    }
                    label="Más intereses sociales y personales"
                />
                <FormControlLabel
                    control={
                        <Checkbox

                            value="antoine"
                        />
                    }
                    label="Ambos"
                />
            </FormGroup>
            <TextField
                id="multiline-flexible"
                label="Algun comentario"
                multiline
                rowsMax="4"
                margin="normal"
                fullWidth
            />
            <DialogContentText>
                3. Informacion que nos puedes brindar acerca de ti
            </DialogContentText>
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
                label="Direccion"
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
        </DialogContent>
        <DialogActions>
            <Button  color="primary">
                Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
                Crear
            </Button>
        </DialogActions>
    </Dialog>
);