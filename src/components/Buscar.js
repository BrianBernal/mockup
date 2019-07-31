import React from 'react';
import Chulito from './Chulito';

const Buscar = () => (
    <div className="row my-4">
        <Chulito></Chulito>
        <div className="col-md-10 d-flex justify-content-center justify-content-md-end align-items-center">
            <form>
                <input type="text" placeholder="🔍 Search" id="searchSending" className="form-control" />
            </form>
        </div>
    </div>
);

export default Buscar;