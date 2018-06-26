import React from 'react';
import './Home.css';


export const Benefits = () => {


    return (
        <div className="beneficios">
            <h2>Un espacio que funciona para ti</h2>
            <div style={{display:"flex", flexWrap:"wrap", width:"80%", margin:"0 auto"}}>
                <div className="box_b">
                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <h3>Crea tu perfil</h3>
                    <p>Crea tu perfil (personal o empresarial) y completa tu información
                    </p>
                </div>
                <div className="box_b">
                    <img src="https://images.pexels.com/photos/136413/pexels-photo-136413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <h3>Explora</h3>
                    <p>Conoce la trayectoria de cada una de las Cámaras, Asociaciones e instituciones destacadas del ámbito industrial en México
                    </p>
                </div>
                <div className="box_b">
                    <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <h3>Interactua</h3>
                    <p>Contacta instituciones y/o personas para generar proyectos y efectuar negociaciones.
                    </p>
                </div>
            </div>
        </div>
    )
}