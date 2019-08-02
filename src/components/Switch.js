import React, { Component } from 'react';
import Emoji from './Emoji';



const Checkbox = props => {
    return (
        <span className={props.clase}>
            {props.size === 'large' ? props.legend : ''}
            <input 
                type="checkbox" 
                className="switch" 
                id={props.id} 
                onChange={props.onChange} 
            />
            <label htmlFor={props.id}>
                {props.size === 'small' ? props.emoji : ''}
            </label>
        </span>
    )
}

class Switch extends Component {
    constructor(props) {
        super(props);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }

    handleSwitchChange() { // MOVER A SWITCH
        this.props.onHandleSwitchChange();
    }

    render() {
        let legend = <Emoji label={this.props.label} symbol={this.props.symbol}></Emoji>
        // legend = this.props.size === 'lg' ? <p className="h2"> {legend} </p> : legend;

        if (this.props.size === 'lg') {
            legend = <p className="h2"> {legend} </p>
            return (
                <div className="form-group">
                    <Checkbox 
                        size = "large"
                        clase="switch switch-lg d-flex justify-content-around align-items-center mt-2"
                        id = {this.props.id}
                        legend = {legend}
                        onChange = {this.props.onHandleSwitchChange ? this.handleSwitchChange : () => {}}
                    />
                </div>
            )
        }

        if (this.props.size === 'sm') {
            return (
                <Checkbox 
                    size = "small"
                    clase="switch switch-sm"
                    id = {this.props.id}
                    onChange = {this.props.onHandleSwitchChange ? this.handleSwitchChange : () => {}}
                    emoji = {<Emoji label="dinero" symbol={this.props.symbol}></Emoji>}
                />
            )
        }
    }

}

export default Switch;