import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="my-2 container">
        <div class="jumbotron">
            <h1 class="display-3 d-none d-md-block">Funcionalidades del Proyecto</h1>
            <h4 class="d-block d-md-none">Funcionalidades del Proyecto</h4>
            <p class="lead">A continuación encontrarás un breve resumen sobre las caracteristicas desarrolladas e implementadas en <Link to="/home">{window.location.hostname}/home</Link></p>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Barra de Busqueda superior 🔍
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        Al ingresar un texto en el cuadro de texto superior justo despues del menu, se filtraran las filas segun coincidencias entre el texto de Busqueda
                        y la ciudad de origen, ciudad de destino, hora, codigos y precios
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Switch lateral con emoticon de dolar 💲
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        Al activar dicho elemento, se organizarán automáticamente las filas del contenido segun el precio de menor a mayor.
                        Cabe mencionar que el Switch en pantallas grandes es diferente al de pantallas pequeñas (Responsive Design). Pero, 
                        ¡no hay problema! en ambos funciona.
                        <br/>
                        <br/>
                        Los demas switches no agregan funcionalidad alguna, Sin embargo es interesante ver que todos estan hechos bajo el 
                        mismo componente React js, y aun asi no se afectan el uno al otro. Esto último es solo una observación técnica
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Emoticones 😊
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        Como seguramente ya abrás notado, todos los íconos del website son emojis. Para ello, fue necesario un componente especial en React js. 
                        Sinceramente, esto fué realizado unicamente por capricho del autor quien siempre había querido hacer un sitio donde los íconos fueran emojis
                        y vió en este proyecto la oportunidad de llevarlo a cabo.
                        <br/>
                        <br/>
                        Tal vez no es muy profesional, pero desde los ojos del autor es muy cool (jajajajja). Aún así el desarrollador es consiente que en un entorno 
                        profesional es necesario usar iconos del tipo <a href="https://fonts.googleapis.com/icon?family=Material+Icons">material-design-icons</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Responsive Design 📲
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        Finalmente, es importante destacar que el mockup es completamente Responsive, permitiendo una adecuada visualización del contenido
                        en pantallas con un mínimo de ancho de hasta 300px. 
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;