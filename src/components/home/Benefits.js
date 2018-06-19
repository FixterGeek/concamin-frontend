import React from 'react';
import './Home.css';


export const Benefits = () => {


    return (
        <div className="beneficios">
            <h2>Un espacio que funciona para ti</h2>
            <div style={{display:"flex", flexWrap:"wrap", width:"80%", margin:"0 auto"}}>
                <div className="box_b">
                    <img src="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <h3>Planes flexibles</h3>
                    <p>Amplía tu oficina conforme vaya creciendo tu equipo, o empieza con un escritorio a ver adónde te lleva.
                    </p>
                </div>
                <div className="box_b">
                    <img src="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <h3>Planes flexibles</h3>
                    <p>Amplía tu oficina conforme vaya creciendo tu equipo, o empieza con un escritorio a ver adónde te lleva.
                    </p>
                </div>
                <div className="box_b">
                    <img src="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <h3>Planes flexibles</h3>
                    <p>Amplía tu oficina conforme vaya creciendo tu equipo, o empieza con un escritorio a ver adónde te lleva.
                    </p>
                </div>
            </div>
        </div>
    )
}