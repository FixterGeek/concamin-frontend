import React, { Component } from 'react';
import './Complements.css';
import FontAwesome from 'react-fontawesome';
//testing chat

class Beneficios extends Component {

    //testing chats


    render() {
        return (
            <div className="anuncios">
                <div className="img_anuncio" style={{backgroundImage:`url('https://images.pexels.com/photos/89478/pexels-photo-89478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350')`}}>
                    <div className="cover_c">
                        <h3>Aprovecha los beneficios de usar Red-Concamin</h3></div>
                </div>
                <div style={{padding:"2%"}} className="box_anuncios">
                    <h2>Las redes sociales atraen, convocan, unen, conectan y comunican a millones de usuarios y empresas.
                    </h2>
                    <p>Contacta de forma rápida a todas las Camaras Nacionales de la CONCAMIN, contacta oferentes y/o demandantes
                        de productos y servicios, ten acceso a vacantes y convocatorias, o enterate de la labor que desempeña cada una.
                    </p>

                    <p><FontAwesome name="adjust"/>  Conoce cada Camára y a sus representates</p>
                    <p><FontAwesome name="adjust"/>  Comunicate de forma rápida</p>
                    <p><FontAwesome name="adjust"/>  Enterate de los eventos nacionales y/o internacionales del sector industrial </p>
                    <p><FontAwesome name="adjust"/>  Crea grupos de trabajo y comunicate de forma interna y privada</p>

                </div>
            </div>
        );
    }
}

export default Beneficios;
