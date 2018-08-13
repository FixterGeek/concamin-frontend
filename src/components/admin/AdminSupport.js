import React, { Component } from 'react';
import './Admin.css';
import FontAwesome from 'react-fontawesome';
//testing chat

class AdminSupport extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    //testing chats
    render() {


        return (
            <div className="anuncios">
                <div className="img_anuncio" style={{backgroundImage:`url('https://images.pexels.com/photos/7075/people-office-group-team.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}>
                    <div className="cover_c">
                        <h3>Soporte </h3></div>
                </div>
                <div style={{padding:"2%"}} className="box_anuncios">
                    <h2>Frecuentes</h2>
                    <p><FontAwesome name="check-circle"/>  Tu perfil y su configuración</p>

                    <p>
                        Como administrador cuentas con permisos adicionales a los de un usuario general, si tienes alguna duda
                        comunicate a <a href="mailto:soporte@concamin.com"><span style={{color:"#648943", fontWeight:"800"}}>admin@fixter.org</span></a>
                    </p>


                </div>
            </div>
        );
    }
}

export default AdminSupport;
