import React, { Component } from 'react'
import '../Admin.css';
import AdminPubliDisplay from './FormPubli';
import {Link} from 'react-router-dom';

class AdminPubliContainer extends Component {

    componentWillMount(){
        if(!localStorage.getItem('user')) this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <Link to="/admin/publi/create">
                <button>Agregar anuncio</button>
                </Link>
            </div>
        )
    }
}
export default AdminPubliContainer;
