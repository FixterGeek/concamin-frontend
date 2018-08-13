import React, {Component} from 'react';
import './Profile.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import {DegreeDisplay} from './DegreeDisplay';
import {JobDisplay} from './JobDisplay';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import ModalDegree from './ModalDegree';
import ModalExperience from './ModalExperience';
import toastr from 'toastr'
//service
import {updateUser} from '../../services/userService'

export class HistoryDisplay extends Component{

    state = {
        user:null,
        editing:false,
        profile:{
            email:'',
            aboutMe:'',
            skills:[]
        }
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            this.setState({user})
        }
    }

    toggleEdition = () => {
        this.setState({editing:true})
    }

    saveProfile = () => {
        const {user} = this.state
        updateUser(user)
        .then(u=>{
            this.setState({editing:false,user:u})
        })
        .catch(e=>{
            toastr.error(e)
        })
        
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {user} = this.state
        user[field] = value
        this.setState({user})
    }

    render(){
        const {user, editing} = this.state
    return (
        <div className='history'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>

                {!editing && <div>
                    <div className="bx"><h5>Contacto</h5> <Edit onClick={this.toggleEdition} /></div>
                    <p> {user.email} </p>
                </div>}
                {editing && <div>
                    <div className="bx"><h5>Contacto</h5> <Save onClick={this.saveProfile} /></div>
                    <Input name="email" onChange={this.onChange} value={user.email} />
                </div>}

                <Divider />


                {!editing && <p>  {user.bio}  </p>}
                {editing && <div>
                    <Input multiline name="bio" onChange={this.onChange} value={user.bio} />
                </div>}



                <Divider />
                <div className="bx"><h5>Formación</h5> <ModalDegree/></div>
                <DegreeDisplay />
                <DegreeDisplay />
                <DegreeDisplay />
                <Divider />
                <div className="bx"><h5>Experiencia</h5> <ModalExperience /> </div>
                <JobDisplay />
                <JobDisplay />
                <JobDisplay />

            </Paper>
        </div>
    )
}
}