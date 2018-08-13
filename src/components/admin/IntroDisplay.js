import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import back from '../../assets/back.jpg';

//testing chat

class IntroDisplay extends Component {
    //testing chats
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="anuncios">
                <div className="img_anuncio" style={{backgroundImage:`url('${back}')`, backgroundPosition:"center"}}>
                    <div className="cover_c">
                        <h3>CONCAMIN-RED</h3></div>
                </div>
                <div style={{padding:"2%"}} className="box_anuncios">
                    <h2>Panel de Administrador</h2>
                    <p>Como administrador de CONCAMIN-RED eres responsable de supervisar a los usuarios, grupos y eventos.
                        Tienes facultad para:
                    </p>
                    <p >
                        <FontAwesome name="check"/>  Visualizar y/o eliminar usuairos de la plataforma
                    </p>
                    <p>
                        <FontAwesome name="check"/>   Eliminar contenido que consideres inapropiado
                    </p>
                    <p>
                        <FontAwesome name="check"/>   Validar y aceptar la creación de grupos de trabajo privados dentro de la plataforma
                    </p>
                    <p>
                        <FontAwesome name="check"/>   Administrar la sección de publicidad dentro del Feed

                    </p>
                    <p>
                        <FontAwesome name="check"/>   Visualizar y aprobar los eventos creados

                    </p>

                    <br/>
                    <p>¿Tienes algun problema? Comunícate con nosotros a  <a href="mailto:soporte@concamin.com"><span style={{color:"#648943", fontWeight:"800"}}>admin@fixter.org</span></a> y recibe ayuda.</p>
                </div>
            </div>
        );
    }
}

export default IntroDisplay;
