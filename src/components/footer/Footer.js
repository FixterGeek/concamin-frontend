import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Footer extends Component {

    //testing chats


    render() {
        return (
            <div>
            <div className="footer">
                <div className="data_footer">
                    <h2>CONCAMIN</h2>
                    <hr className="line_footer"/>
                    <div style={{display:"flex", flexWrap:"wrap"}}>
                        <div style={{width:"250px", flexGrow:"1"}}>
                            <p>Qué es CONCAMIN?</p>
                            <p>Sala de Prensa</p>
                            <p>Comisiones de trabajo</p>
                        </div>
                        <div style={{width:"250px", flexGrow:"1"}}>
                            <p>
                            Manuel Ma. Contreras 133 Cuauhtémoc,</p>
                            <p>Cuidad de México</p>
                            <p>   Tel. 5140-7800</p>
                        </div>
                        <div  className="media" style={{width:"250px", flexGrow:"1", textAlign:"center"}}>
                            <a href="https://www.facebook.com/concamin.industriaconfederada/" target="blank">
                                <FontAwesome name="facebook-f"/>
                            </a>
                            <a href="https://twitter.com/CONCAMIN" target="blank">
                                <FontAwesome name="twitter"/>
                            </a>
                            <a href="https://www.instagram.com/concamin_mx/" target="blank">
                                <FontAwesome name="instagram"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCKYWyQAihvuQWEgRJWKUnrg" target="blank">
                                <FontAwesome name="youtube"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
                <div style={{backgroundColor:"#252729"}}>
                    <div className="copy">
                        <p>® CONCAMIN 2018</p>
                        <div className="ff" style={{display:"flex"}}>
                            <p>Politicas de Privacidad</p>
                            <br/>
                            <p>Términos y condiciones</p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#1D1D1E", height:"40px", fontFamily: "Proxima Nova", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <p style={{margin:"0", color:"white"}}>By Fixter</p>
                </div>
            </div>
        );
    }
}

export default Footer;
