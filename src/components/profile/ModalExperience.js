import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddCircle from '@material-ui/icons/AddCircle';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import School from '@material-ui/icons/School';
import AvTimer from '@material-ui/icons/AvTimer';
import Book from '@material-ui/icons/Book';
import CardTravel from '@material-ui/icons/CardTravel';
import Bussines from '@material-ui/icons/Business';
import Date from '@material-ui/icons/DateRange';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ModalExperience extends Component{
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render(){

        return(
            <div className="dialog">
                <AddCircle onClick={this.handleClickOpen}/>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Experiencia"}
                    </DialogTitle>
                    <DialogContent>
                        <FormControl >
                            <InputLabel htmlFor="input-with-icon-adornment">Cargo</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <CardTravel />
                                    </InputAdornment>
                                }
                            /></FormControl>
                        <br/>
                        <br/>
                        <FormControl >

                            <InputLabel htmlFor="input-with-icon-adornment">Empresa</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Bussines />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >

                            <InputLabel htmlFor="input-with-icon-adornment">Período</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Date />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Guardar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ModalExperience;