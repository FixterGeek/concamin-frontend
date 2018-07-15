import React, { Component } from 'react';
import './Complements.css';
import FontAwesome from 'react-fontawesome';
//testing chat

class Comunicacion extends Component {
    //testing chats
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="anuncios">
                <div className="img_anuncio" style={{backgroundImage:`url('https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}>
                    <div className="cover_c">
                        <h3>CONCAMIN</h3></div>
                </div>
                <div style={{padding:"2%"}} className="box_anuncios">
                    <h2>Confederación de Camáras Industriales</h2>
                    <p>La Confederación de Cámaras Industriales de los Estados Unidos Mexicanos,
                        CONCAMIN, constituida en 1918, es el organismo cúpula de representación
                        de los distintos sectores industriales, actividades económicas de alta
                        trascendencia para el desarrollo económico de México.
                    </p>
                    <p>
                        Integra 46 cámaras nacionales, 14 cámaras regionales, 3 cámaras genéricas
                        y 46 asociaciones de los distintos sectores productivos que existen en el país.
                </p>
                    <p>
                        CONCAMIN se posiciona como la fuerza política de los industriales, al promover
                        y defender sus intereses legítimos.
                    </p>
                    <p>
                        Es un organismo de representación empresarial efectivo, reconocido por su
                        liderazgo y capacidad plena para desarrollar a través de sus comisiones de
                        trabajo proyectos e iniciativas que contribuyen a lograr el desarrollo sostenido
                        de la industria mexicana.
                    </p>
                    <p>
                        De acuerdo a lo establecido por la Ley de Cámaras Empresariales y sus
                        Confederaciones, somos un órgano de consulta y colaboración del Estado;
                        por ello mantenemos una relación estrecha, armónica y propositiva con
                        los tres niveles de gobierno y los poderes de la nación.
                    </p>
                    <p><FontAwesome name="adjust"/>  Organismo comprometido con el crecimiento económico del país.</p>
                    <p><FontAwesome name="adjust"/>  Obligado órgano de consulta de los tres órdenes de gobierno en todos aquellos temas relacionados a la industria en México, acorde a la Ley de Cámaras Empresariales  y sus Confederaciones.
                    </p>
                    <p><FontAwesome name="adjust"/>  Anualmente, alrededor del 30% del Producto Interno Bruto que se genera en el país proviene de los afiliados a la Confederación de Cámaras Industriales de los Estados Unidos Mexicanos.
                    </p>
                    <br/>
                    <p>Para saber más, visitar <a href="http://concamin.mx/?page_id=191" target="blank"><span style={{color:"#648943", fontWeight:"800"}}>CONCAMIN.</span></a></p>
                </div>
            </div>
        );
    }
}

export default Comunicacion;
