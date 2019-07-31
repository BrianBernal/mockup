import React from 'react';
import imgFilter from '../imagenes/smartFilters.png';
import Emoji from './Emoji';
import Switch from './Switch';


const Sidebar = () => (
    <div className="col-md-2 px-5 d-none d-md-block">
        <div className="row border-bottom border-dark fondoMockup d-flex align-items-end align-items-xl-center justify-content-center" style={{ height: '14rem' }}>
            <img src={imgFilter} className="card-img-top d-none d-xl-block" alt="..." />
            <h4 className="card-subtitle text-secondary text-center"><Emoji label="rapido" symbol="💡"></Emoji> Smart Filters</h4>
        </div>

        <div className="row mt-4 border-bottom border-dark">
            <div className="form-group card border-0 fondoMockup" style={{ width: '18rem' }}>
                <Switch symbol="💲" legend="dinero" id="switch-venta" size="lg"></Switch>
                <Switch symbol="📆" legend="calendario" id="switch-calendar" size="lg"></Switch>
                <Switch symbol="💗" legend="corazon" id="switch-corazon" size="lg"></Switch>
            </div>
        </div>

        <div className="row p-4 border-bottom border-dark fondoMockup d-flex align-items-center justify-content-center"
            style={{ height: '14rem' }}>
            <h4 className="card-subtitle text-secondary text-center">Status</h4>
            <input type="text" className="form-control searchDelivered" id="xxxxxxxxx" aria-describedby="emailHelp"
                placeholder="🔍 Search" />
            <button type="button" className="btn btn-outline-primary">DELIVERED</button>
        </div>

    </div>
);


export default Sidebar;