import React, { Component } from 'react'
import '../Admin.css';
import { AdminPubliDisplay } from './FormPubli';
import { Link } from 'react-router-dom';
import './Publi.css'
import Imagen from '../../../assets/aniver.png'
import { PubliCard } from './PubliCard'
import Button from '@material-ui/core/Button';
import {getAdvertisements, removeAdvertisement, editAdvertisement} from '../../../services/advertisementService';
import toastr from 'toastr'




class AdminPubliContainer extends Component {
    state = {
        checked: false,
        announces:[]
    }
    componentWillMount() {
        if (!localStorage.getItem('user')) this.props.history.push('/login');
        this.getAnuncios()
    }
    getAnuncios=()=>{
        getAdvertisements('all')
            .then(r=>{
                this.setState({announces:r})
                console.log(r)
            }).catch(e=>{
            console.log(e)
        })
    }

    handleSwitch = (e) => {
        //Cambiará es estado del switch.
    }
    deleteItem=(id)=>{
        let {announces} = this.state
        removeAdvertisement(id)
            .then(r=>{
                toastr.success('Anuncio removido')
                announces = announces.filter(a=>a._id!==id)
                this.setState({announces})
            }).catch(e=>{
            toastr.error('Ocurrió un problema, intenta más tarde!')
        })
    }

    editItem=(e, bool, obj)=>{

        let item = {toPublish:bool}
        console.log(item)
        editAdvertisement(obj._id, item)
            .then(r=>{
                console.log(r)
                toastr.success('Editado con éxito')
            }).catch(e=>{
                toastr.error('Ocurrió un problema, intenta más tarde')
        })
    }


    render() {
        let {announces} = this.state
        return (
            <div>
                <PubliCard announces={announces} deleteItem={this.deleteItem} editItem={this.editItem}/>
                <div style={{position:"absolute", right:"30px", bottom:"30px"}}>
                    <Link to="/admin/publi/create">
                        <Button variant="raised" color="primary" type="submit">
                            Agregar anuncio
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default AdminPubliContainer;
