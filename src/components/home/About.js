import React from 'react';
import './Home.css';
import image from '../../assets/image4.JPG';

export const About = () => {


    return (<div className="abouti">
        <div className="fl">
            <div style={{display:"flex" }}>
                <div>
            <h2>Bienvenidos a CONCAMIN-RED</h2>
                    <p>DONDE LA COMUNICACIÓN EMERGE</p>
                    <br/>
                <p>Es una red de espacios digitales de trabajo donde las
                    personas y las camarás crecen juntas. Transformamos la comunicación
                    tanto interna como externa para ofrecer a todos los interesados en CONCAMIN,
                    una ventana para acercarse y volverse parte del ecosistema industrial en México,
                    fomentando la creatividad, el enfoque y las conexiones.
                    <br/>
                    Esta transformación va mas allá de crear una plataforma virtual, ya que
                    intentamos transformar los esquemas tradicionales de comunicación en un medio
                    más eficiente, órganico y moderno.
                </p></div>
            </div>
            <div>
                <img src={image} alt=""/>
            </div>
        </div></div>
    )
}