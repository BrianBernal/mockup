import React from 'react';

import Emoji from './Emoji';

const Chulito = props => {
    let clase = "bg-warning rounded-circle sizeChulito text-center h2";
    clase = props.clases ? `${props.clases} ${clase}` : clase;
    
    return (
        <div className="col-lg-2 d-flex justify-content-center align-items-center image-fluid">
            <p className={clase}><Emoji label="bien" symbol="✔"></Emoji></p>
        </div>
    );
}

export default Chulito;