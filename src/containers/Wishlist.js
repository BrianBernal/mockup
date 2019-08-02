import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => (
    <div className="my-2 container">
        <div class="jumbotron">
            <h1 class="display-3 d-none d-md-block">Fuentes y herramientas usadas para el desarrollo</h1>
            <h4 class="d-block d-md-none">Fuentes y herramientas usadas para el desarrollo</h4>
            <p class="lead">Estos son algunas de las fuentes y apoyos mas importantes usadas por el desarrollado del sitio en general: <Link to="/home">{window.location.hostname}/home</Link></p>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Bootstrap grid-system
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        La gran mayoria del sitio se estructuró usando el gid-system de <a href="https://getbootstrap.com/docs/4.3/layout/overview/">Bootstrap</a>
                        <br/>
                        <br/>
                        Solo hay una pequeña pseudo-clase en css3 para el correcto funcionamiento Responsive
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Diseño de colores ✒
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                        Los colores fueron gracias a la variación de Bootstrap tomada de <a href="https://bootswatch.com/flatly/">Bootswatch</a> quienes hacen un magnífico 
                        trabajo en personalización de temas basados en Bootstrap
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Switches
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        Los switches grandes son una modificación del código publicado por un bloguero que lo puedes encontrar <a href="https://www.abeautifulsite.net/bootstrap-4-switches">aquí</a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            React Js
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                        Finalmente, para la implementación de React Js, el desarrollador a tomado como principal apoyo la <a href="https://reactjs.org">Documentación oficial de React js </a> 
                        y de la <a href="https://reacttraining.com/react-router/web/">Documentación oficial de React Router</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Wishlist;