import React, { Component } from 'react'
import '../Admin.css';
import AdminPubliDisplay from './FormPubli';
import { Link } from 'react-router-dom';
import './Publi.css'
import Imagen from '../../../assets/aniver.png'
import { PubliCard } from './PubliCard'

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
    componentWillMount() {
        if (!localStorage.getItem('user')) this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                <PubliCard announces={announces} />
                <Link to="/admin/publi/create">
                    <button>Agregar anuncio</button>
                </Link>
            </div>
        )
    }
}
export default AdminPubliContainer;
