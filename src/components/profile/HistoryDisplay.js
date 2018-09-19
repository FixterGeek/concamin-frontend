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
import {updateUser, getSkills, saveSkill, deleteSkill} from '../../services/userService'

export class HistoryDisplay extends Component{

    state = {
        user:null,
        editing:false,
        skills:[]
    }

    componentWillMount(){
        const usuario = JSON.parse(localStorage.getItem('user'))
        if(usuario){
            const user = {
                email:usuario.email,
                bio: usuario.bio,
                _id: usuario._id
            }
            getSkills(user)
            .then(skills=>{
                this.setState({user, skills})
            })
            .catch(e=>{
                console.log(e)
                toastr.error("Hubo un error al cargar tus datos...")
            })
            
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
            toastr.info('Datos actualizados')
            console.log(u)
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

    addSkill = (skill) => {
        console.log(skill)
        const {skills} = this.state
        skills.unshift(skill)
        this.setState({skills})
        saveSkill(skill)
        .then(skill=>{
            toastr.info("Perfil actualizado")
            const sks = skills.map(s=>{
                if(s.title === skill.title) return skill
                return s
            })
            this.setState({skills:sks})
        })
        .catch(e=>{
            toastr.error("no se pudo agregar", e)
            skills.splice(0,1)
            this.setState({skills})
        })
        this.setState({skills})
    }

    removeSkill = (skill) => {
        if(!window.confirm("Seguro que deceas borrar ?")) return
        const {skills} = this.state
        deleteSkill(skill)
        .then(()=>{
            const index = skills.indexOf(skill)
            skills.splice(index,1)
            this.setState({skills})
            toastr.info("Perfil actualizado")
        })
        .catch(e=>{
            toastr.error("no se pudo borrar")
        })
    }

    render(){
        const {user, editing, skills} = this.state
        if(!user) return null
    return (
        <div className='history'>
            <Paper elevation={4} style={{padding:" 2% 6%"}}>

                {/* {!editing && <div>
                    <div className="bx"><h5>Contacto</h5> <Edit onClick={this.toggleEdition} /></div>
                    <p> {user.email} </p>
                </div>}
                {editing && <div>
                    <div className="bx"><h5>Contacto</h5> <Save onClick={this.saveProfile} /></div>
                    <Input name="email" onChange={this.onChange} value={user.email} />
                </div>} */}

                <div>
                    <p> {user.email} </p>
                </div>

                <Divider />


                {!editing && <div>
                    <div className="bx"><h5>Mini Bio</h5> <Edit onClick={this.toggleEdition} /></div>
                    <p>  {user.bio}  </p>
                    </div>}
                {editing && <div>
                    <div className="bx"><h5>Mini Bio</h5> <Save onClick={this.saveProfile} /></div>
                    <Input multiline name="bio" onChange={this.onChange} value={user.bio} />
                </div>}



                <Divider />
                <div className="bx"><h5>Formación</h5> 
                <ModalDegree
                    addSkill={this.addSkill}
                />
                </div>
                {skills.map((s, i)=>{
                    if(s.tipo === "EDU") return <DegreeDisplay removeSkill={()=>this.removeSkill(s)} key={i} {...s} />
                })}
                

                <Divider />
                <div className="bx"><h5>Experiencia</h5> 
                <ModalExperience 
                    addSkill={this.addSkill}
                />
                 </div>
                
                {skills.map((s, i)=>{
                    if(s.tipo === "PRO") return <JobDisplay removeSkill={()=>this.removeSkill(s)} key={i} {...s} />
                })}

            </Paper>
        </div>
    )
}
}