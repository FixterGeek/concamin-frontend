import React, { Component } from 'react';
import './Complements.css';
import FontAwesome from 'react-fontawesome';
//testing chat

class Anuncios extends Component {

    //testing chats


    render() {
        return (
            <div className="anuncios">
                <div className="img_anuncio">
                    <div className="cover_c">
                    <h3>Anunciate en Red-Concamin</h3></div>
                </div>
                <div style={{padding:"2%"}} className="box_anuncios">
                <h2>Puedes poner en circulación anuncios sea cual sea el presupuesto
                </h2>
                    <p>Podemos mostrar tus anuncios a las personas, que lleven a cabo la interacción con estos, crear una experiencia que sea relevante y posteriormente puedan ponerse en contacto contigo. No hace falta ser un experto en tecnología para sacarle el máximo partido.</p>

                    <p><FontAwesome name="adjust"/>  Encuentra a personas fácilmente</p>
                    <p><FontAwesome name="adjust"/>  Capta la atención de los usuarios</p>
                    <p><FontAwesome name="adjust"/>  Muestra tus anuncios a más personas en más lugares</p>
                    <p><FontAwesome name="adjust"/>  Genera confianza en tus clientes</p>
                    <br/>
                    <p>¿Estás interesado en anunciarte? Envía un mail a publicidad@concamin.com y recibe más información</p>
                </div>
            </div>
        );
    }
}

export default Anuncios;
