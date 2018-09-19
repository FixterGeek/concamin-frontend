import React from 'react';
import './Home.css';
import logo from '../../assets/aniver.png';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export const HomeDisplay = () => {
    return (
        <div className="slide">
            <div className="cover">
            <div className="menu">
                <img src={logo} alt=""/>
                <div className="box_men">
                    <hr className="line"/>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <h1 className="titulo">CONCAMIN<br/></h1>
                <p className="sign">Confederación de Cámaras Industriales</p>
                <br/>
                <a href="#about">
                    <FontAwesome className="icono" name="angle-down" size="3x"/>
                </a>
            </div>
            </div>
        </div>
    )
}