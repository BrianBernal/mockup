import React from 'react';
import { Link } from 'react-router-dom';

import Emoji from './Emoji';
import Chulito from './Chulito';

const DescripcionRuta = props => {
    const {id, fecha, hora, diaNoche, ciudadOrigen, ciudadDestino, precio} = props.fila;
    return (
        <div className="row mb-5">
            <Chulito></Chulito>
            <div className="col-lg-10">
                <div
                    className="row bg-white radius-table py-3 mx-1 flex justify-content-center align-items-center border-right">
                    <div className="col-sm-2 d-flex justify-content-center align-items-center border-right">
                        <div className="card-body">
                            <h6 className="card-subtitle text-muted text-center">{fecha}</h6><br />
                            <h6 className="card-subtitle text-muted text-center">{hora}</h6><br />
                            <h6 className="card-subtitle text-muted text-center">{diaNoche}</h6>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center align-items-center border-right">
                        <div className="d-none d-lg-block d-xl-block">
                            <p className="h3 text-right"><Emoji label="rapido" symbol="💨"></Emoji></p>
                        </div>
                        <div className="col-sm-10">
                            <p className="text-center">{ciudadOrigen}</p>
                            <p className="text-center h3"><Emoji label="abajo" symbol="👇"></Emoji></p>
                            <p className="text-center">{ciudadDestino}</p>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-around align-items-center">
                        <p className="display-3 d-none d-lg-block d-xl-block"><Emoji label="furgon" symbol="🚚"></Emoji></p>
                        <p className="h2" id="precio">$ {precio} </p>
                        <button className="btn btn-danger">1</button>
                        <Link to={"/home/" + id} className="btn btn-light"><Emoji label="detalles" symbol="🛠"></Emoji></Link>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default DescripcionRuta;