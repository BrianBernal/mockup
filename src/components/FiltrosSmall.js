import React from 'react';

import Emoji from './Emoji';

const FiltrosSmall = () => (
    <div class="border border-dark m-3 p-2 d-block d-md-none">
        <h4 class="card-subtitle text-secondary text-center">Smart Filters</h4>
        <div class=" d-sm-flex justify-content-sm-around">
            <span class="switch switch-sm">
                <input type="checkbox" class="switch" id="pesos-switch-sm" />
                <label for="pesos-switch-sm"><Emoji label="dinero" symbol="💲"></Emoji></label>
            </span>
            <span class="switch switch-sm">
                <input type="checkbox" class="switch" id="calendario-switch-sm" />
                <label for="calendario-switch-sm"><Emoji label="calendario" symbol="📆"></Emoji></label>
            </span>
            <span class="switch switch-sm">
                <input type="checkbox" class="switch" id="corazon-switch-sm" />
                <label for="corazon-switch-sm"><Emoji label="favorito" symbol="💗"></Emoji></label>
            </span>
        </div>
    </div>
);

export default FiltrosSmall