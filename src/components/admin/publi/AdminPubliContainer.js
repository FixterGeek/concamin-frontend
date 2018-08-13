import React, { Component } from 'react'
import '../Admin.css';
import { AdminPubliDisplay } from './FormPubli';
import { Link } from 'react-router-dom';
import './Publi.css'
import Imagen from '../../../assets/aniver.png'
import { PubliCard } from './PubliCard'
import Button from '@material-ui/core/Button';


const announces = [
    {
        title: 'Publicidad 1',
        img: Imagen,
    },
    {
        title: 'Publicidad 2',
        img: Imagen,
    }
]



class AdminPubliContainer extends Component {
    state = {
        checked: false,
    }
    componentWillMount() {
        if (!localStorage.getItem('user')) this.props.history.push('/login');
    }

    handleSwitch = (e) => {
        //Cambiará es estado del switch.
    }


    render() {
        return (
            <div>
                <PubliCard announces={announces} />
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
