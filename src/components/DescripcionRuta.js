import React from 'react';

import Emoji from './Emoji';
import Chulito from './Chulito';

const DescripcionRuta = () => {
    return (
        <div className="row mb-5">
            <Chulito></Chulito>
            <div className="col-lg-10">
                <div
                    className="row bg-white radius-table py-3 mx-1 flex justify-content-center align-items-center border-right">
                    <div className="col-sm-2 d-flex justify-content-center align-items-center border-right">
                        <div className="card-body">
                            <h6 className="card-subtitle text-muted text-center">Monday</h6><br />
                            <h6 className="card-subtitle text-muted text-center">10th 2:28</h6><br />
                            <h6 className="card-subtitle text-muted text-center">PM</h6>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center align-items-center border-right">
                        <div className="d-none d-lg-block d-xl-block">
                            <p className="h3 text-right"><Emoji label="rapido" symbol="💨"></Emoji></p>
                        </div>
                        <div className="col-sm-10">
                            <p className="text-center">Houston, TX, 33619</p>
                            <p className="text-center h3"><Emoji label="abajo" symbol="👇"></Emoji></p>
                            <p className="text-center">Atlanta, GA, 30123</p>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-around align-items-center">
                        <p className="display-3 d-none d-lg-block d-xl-block"><Emoji label="furgon" symbol="🚚"></Emoji></p>
                        <p className="h2" id="precio">$ 250.00 </p>
                        <button className="btn btn-danger">1</button>
                        <button className="btn btn-light">🌫</button>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default DescripcionRuta;