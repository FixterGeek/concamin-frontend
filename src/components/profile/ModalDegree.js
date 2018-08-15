import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ModalDegree extends Component{
    state = {
        open: false,
        skill:{
            from:Date.month,
            to: Date.month,
            title:'',
            university:'',
            tipo:'EDU'
        }
    };

    onChange = (e) => {
        const {skill} = this.state
        const field = e.target.name
        const value = e.target.value
        skill[field] = value
        this.setState({skill})
    }

    addSkill = () => {
        const {skill} = this.state
        console.log(skill)
        this.props.addSkill(skill)
        this.handleClose()
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render(){
        const {skill} = this.state
        const {title, university, from, to} = skill
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
                        {"Educación"}
                    </DialogTitle>
                    <DialogContent>
                        <FormControl >
                        <InputLabel htmlFor="input-with-icon-adornment">Título</InputLabel>
                        <Input
                            value={title}
                            name="title"
                            onChange={this.onChange}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <School />
                                </InputAdornment>
                            }
                        /></FormControl>
                            <br/>
                        <br/>
                        <FormControl >

                            <InputLabel htmlFor="input-with-icon-adornment">Universidad</InputLabel>
                            <Input
                                value={university}
                                name="university"
                                onChange={this.onChange}
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Book />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >

                        <InputLabel htmlFor="input-with-icon-adornment">Desde</InputLabel>
                            <Input
                                onChange={this.onChange}
                                value={from}
                                type="month"
                                name="from"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AvTimer />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >

                        <InputLabel htmlFor="input-with-icon-adornment">Hasta</InputLabel>
                            <Input
                                onChange={this.onChange}
                                value={to}
                                type="month"
                                name="to"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AvTimer />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.addSkill} color="primary">
                            Guardar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ModalDegree;