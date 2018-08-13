import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



export const FormPubli = ({}) => {

    return (
        <div className='form_publi'>
            <Paper style={{padding:"30px"}}>
            <h3>Crea un anuncio</h3>
            <form action="">
                <TextField
                    id="anunciante"
                    label="Anunciante"

                    placeholder="Nombre o Giro"
                    helperText="Máx. 20 carácteres"
                    fullWidth
                    margin="normal"
                />
                <br/>
                <TextField
                    id="nombre"
                    label="Nombre del anuncio"

                    placeholder="Ejemplo"
                    helperText="Máx. 20 carácteres"
                    fullWidth
                    margin="normal"
                />
                <br/>
                <TextField
                    id="descript"
                    label="Descripción"

                    placeholder="Breve descripción"
                    helperText="Máx. 150 carácteres"
                    fullWidth
                    margin="normal"
                />
                <br/>
                <br/>
                <label htmlFor="">Selecciona la imagen del anuncio</label>
                <input
                    style={{display:"none"}}
                    accept="image/*"
                    id="flat-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="flat-button-file">
                    <Button component="span">
                        Upload
                    </Button>
                </label>
                <br/>
                <div className="btns_actions">
                    <Button onClick={this.handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </div>
            </form>
            </Paper>
        </div>
    )
}