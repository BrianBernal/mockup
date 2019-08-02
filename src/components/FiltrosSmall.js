import React from 'react';

import Switch from './Switch';

const FiltrosSmall = props => (
    <div className="border m-3 p-2 d-block d-md-none" style={{ background: '#b2cde9' }}>
        <h4 className="card-subtitle text-secondary text-center">Smart Filters</h4>
        <div className=" d-sm-flex justify-content-sm-around">
            <Switch symbol="💲" legend="dinero" id="switch-venta-sm" size="sm" onHandleSwitchChange={props.onHandleSwitchChange}></Switch>
            <Switch symbol="📆" legend="calendario" id="calendario-switch-sm" size="sm"></Switch>
            <Switch symbol="💗" legend="favorito" id="corazon-switch-sm" size="sm"></Switch>
        </div>
    </div>
);

export default FiltrosSmall