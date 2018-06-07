import React from 'react';
import './Home.css';
import logo from '../../assets/aniver.png';
import {Link} from 'react-router-dom';

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
                <h1>Confederación de <br/>Cámaras Industriales</h1>
                <br/>
                <button className="btn_explore">Explorar</button>
            </div>
            </div>
        </div>
    )
}