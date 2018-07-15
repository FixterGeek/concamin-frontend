import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {sendInvites} from '../../services/groupsService';
import swal from 'sweetalert';
import toastr from 'toastr';
import PropTypes from 'prop-types';


class AddModal extends Component{

    state = {
        open: false,
        emails:[]
    };

    onChange = (e) => {
        const value = e.target.value;
        let emails = value.split(',');
        emails = emails.filter(e=>e.includes('@'))
        console.log(emails)
        this.setState({emails});
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    sendInvite = () => {
        const groupId = this.props.groupId;
        const {emails} = this.state //array
        const invite = {groupId,emails}
        sendInvites(invite)
        .then(r=>{
            swal({
                title: "¡Genial!",
                text: "Tus invitaciones se han enviado",
                icon: "success",
                button:true
            })
        })
        .catch(e=>toastr.error('no se puediron enviar, intenta más tarde.'))
    };

    render(){

        return(
            <div>
                <Button onClick={this.handleClickOpen}>Invitar</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Invitar al grupo {this.props.name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            
                        >
                            Para agregar usuarios a este grupo, agrega las direcciónes de e-mail separadas por coma aquí y enviaremos una invitación.

                        </DialogContentText>
                        <TextField
                            onChange={this.onChange}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.sendInvite} color="primary">
                            Enviar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

AddModal.propTypes = {
    groupId: PropTypes.string.isRequired,
    name: PropTypes.string
}

export default AddModal;