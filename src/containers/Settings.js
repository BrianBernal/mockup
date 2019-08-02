import React from 'react';

const Settings = () => (
    <div className="my-2 container">
        <div class="jumbotron">
            <h1 class="display-3 d-none d-md-block">Futuros posibles features</h1>
            <h4 class="d-block d-md-none">Futuros posibles features</h4>
            <p class="lead">A continuación algunas caracteristicas que el desarrollados pordía agregar</p>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Backend
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        El autor del proyecto está en la capacidad de implementar un Backend tipo Rest Api para la optención de datos a partir de 
                        una Base de Datos tipo PostgreSQL   
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Diseño
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        El desarrollador está en capacidad de implementar iconografía mas profesional y practicamente cualquier requerimiento posible dentro de React Js
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Settings;