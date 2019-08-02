import React from 'react';
import foto from '../imagenes/elegante.png';

const Account = () => {
    return (
        <div className="container my-5 d-flex justify-content-center">
            <div className="card border-info mb-3 cardAccount">
                <div className="card-header">Desarrollador Web - Fullstack Javascript</div>
                <div className="card-body">
                    <h4 className="card-title">Brian Bernal Hernandez</h4>
                    <h5 className="card-title">Tel: +57 3156273724</h5>
                    <img className="my-2 card-img-top" src={foto}/>
  
                    <p className="card-text">
                        Ingeniero de Sistemas. Diestro en manejo de tecnologías relacionadas al Desarrollo web especialmente aquellas inmersas en el lenguaje JavaScript (React, Express). Gran desempeño en Desarrollo Frontend, es decir, HTML5, css3, css-grid, flexbox, Bootstrap 4, Sass y el Framework (librería) React. Manejo intermedio de bases de datos PostgreSQL y MySQL. 
                        <br/>
                        <br/>
                        Nivel alto de lectura en lengua inglés y nivel medio en inglés hablado. Con disponibilidad de viajar y cambio de domicilio. Recién graduado, en busca de una oportunidad para adquirir experiencia laboral.
                        <br/>
                        <br/>
                        Apasionado por el aprendizaje continuo y las Tecnologías de la Información.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Account;