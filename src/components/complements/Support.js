import React, { Component } from 'react';
import './Complements.css';
import FontAwesome from 'react-fontawesome';
//testing chat

class Support extends Component {
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
                        Anade una forto de perfil y de portada, edita tus datos, agrega tu información profesional y administra el contenido de tu feed.
                    </p>
                    <p><FontAwesome name="check-circle"/>  Grupos</p>

                    <p>
                        Crea un grupo de trabajo privado, e invita a otros usuarios a ser parte de el.
                    </p>
                    <p><FontAwesome name="check-circle"/>  Mensajería</p>

                    <p>
                        Envía mensajes a otros usuarios de forma instantánea después volverte su seguidor.
                    </p>
                    <p><FontAwesome name="check-circle"/>  Notificaciones</p>

                    <p>
                        Recibe notificaciones cuando alguien se ponga en contacto contigo, te siga, o se actualice un evento en el que estas interesado.
                    </p>
                    <br/>
                    <p>¿Aún tienes dudas? Envía un mail a <a href="mailto:soporte@concamin.com"><span style={{color:"#648943", fontWeight:"800"}}>soporte@concamin.com</span></a> y recibe más información.</p>

                </div>
            </div>
        );
    }
}

export default Support;
