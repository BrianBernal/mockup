import React from 'react';

import Emoji from '../components/Emoji';
import Chulito from '../components/Chulito';

const DescripcionRuta = () => {
    return (
        <div class="row mb-5">
            <Chulito></Chulito>
            <div class="col-lg-10">
                <div
                    class="row bg-white radius-table py-3 mx-1 flex justify-content-center align-items-center border-right">
                    <div class="col-sm-2 d-flex justify-content-center align-items-center border-right">
                        <div class="card-body">
                            <h6 class="card-subtitle text-muted text-center">Monday</h6><br />
                            <h6 class="card-subtitle text-muted text-center">10th 2:28</h6><br />
                            <h6 class="card-subtitle text-muted text-center">PM</h6>
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex justify-content-center align-items-center border-right">
                        <div class="d-none d-lg-block d-xl-block">
                            <p class="h3 text-right"><Emoji label="rapido" symbol="💨"></Emoji></p>
                        </div>
                        <div class="col-sm-10">
                            <p class="text-center">Houston, TX, 33619</p>
                            <p class="text-center h3"><Emoji label="abajo" symbol="👇"></Emoji></p>
                            <p class="text-center">Atlanta, GA, 30123</p>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-around align-items-center">
                        <b class="display-3 d-none d-lg-block d-xl-block"><Emoji label="furgon" symbol="🚚"></Emoji></b>
                        <p class="h2" id="precio">$ 250.00 </p>
                        <button class="btn btn-danger">1</button>
                        <button class="btn btn-light">🌫</button>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default DescripcionRuta;