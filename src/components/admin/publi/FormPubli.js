import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Publi.css'



class FormPubli extends Component {
    input;
    preview;
    state = {
        files: [],
    }

    getFile = (e) => {
        this.preview.innerHTML = '';
        this.setState({ files: e.target.files });
        for (let pic of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(pic);
            reader.onload = (e) => {
                this.makeImgPreview(e.target.result);
            };
        }

    };

    makeImgPreview = (urlPic) => {
        const div = document.createElement('div');
        let im = new Image();
        im.src = urlPic;
        im.className = 'img-preview'
        div.appendChild(im);
        div.className = 'card-img';
        this.preview.appendChild(div);
    };
    render() {
        return (
            <div className='form_publi' >
                <Paper style={{ padding: "30px" }}>
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
                        <br />
                        <TextField
                            id="nombre"
                            label="Nombre del anuncio"

                            placeholder="Ejemplo"
                            helperText="Máx. 20 carácteres"
                            fullWidth
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="descript"
                            label="Descripción"

                            placeholder="Breve descripción"
                            helperText="Máx. 150 carácteres"
                            fullWidth
                            margin="normal"
                        />
                        <br />
                        <br />
                        <label htmlFor="">Selecciona la imagen del anuncio</label>
                        <input
                            style={{ display: "none" }}
                            accept="image/*"
                            id="flat-button-file"
                            multiple
                            type="file"
                        />
                        <div>
                            <p>Preview</p>
                            <div ref={div => this.preview = div} className="card-img">

                            </div>
                        </div>
                        <label className="file-button">
                            <input accept="image/*" onChange={this.getFile} ref={inp => this.input = inp} type="file" hidden />
                            Upload
                        </label>
                        <br />
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
}

export default FormPubli