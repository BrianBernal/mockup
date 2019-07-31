import React from 'react';
import Emoji from './Emoji';


// function legend(props) {
//     let legend = <Emoji label={props.label} symbol={props.symbol}></Emoji>;
// }

const Switch = props => {
    let legend = <Emoji label={props.label} symbol={props.symbol}></Emoji>
    // legend = props.size === 'lg' ? <p className="h2"> {legend} </p> : legend;

    if (props.size === 'lg') {
        legend = <p className="h2"> {legend} </p>
        return (
            <div className="form-group">
                <span className="switch switch-lg d-flex justify-content-around align-items-center mt-2">
                    {legend}
                    <input type="checkbox" className="switch" id={props.id} />
                    <label htmlFor={props.id}></label>
                </span>
            </div>
        )
    } 
    
    if (props.size === 'sm') {
        return (
            <span className="switch switch-sm">
                <input type="checkbox" className="switch" id={props.id} />
                <label htmlFor={props.id}><Emoji label="dinero" symbol={props.symbol}></Emoji></label>
            </span>
        )
    }

}

export default Switch;