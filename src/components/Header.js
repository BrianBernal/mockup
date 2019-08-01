import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Emoji from './Emoji';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handlePathChange = this.handlePathChange.bind(this);
    }

    handlePathChange() {
        this.props.onHandlePathChange();
    }
    
    render() {
        return (
            <header onClick={this.handlePathChange}>
                <ul className="nav nav-pills nav-fill bg-white">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" activeClassName="active"> <p className="d-block h4"><Emoji label="casa" symbol="🏠"></Emoji></p> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/messages" activeClassName="active"> <p className="d-block h4"><Emoji label="mensaje" symbol="📨"></Emoji></p> Messages</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/wishlist" activeClassName="active"> <p className="d-block h4"><Emoji label="favoritos" symbol="⭐"></Emoji></p> Wishlist</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/settings" activeClassName="active"> <p className="d-block h4"><Emoji label="configuracion" symbol="⚙"></Emoji></p> Settings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/account" activeClassName="active"> <p className="d-block h4"><Emoji label="cuenta" symbol="👤"></Emoji></p> My Account</NavLink>
                    </li>
                </ul>
            </header>
        );
    }
}
export default Header;