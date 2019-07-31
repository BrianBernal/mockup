import React from 'react';
// import { Route, Link } from 'react-router-dom';

import Emoji from './Emoji';

const Header = () => (
    <header>
        <ul className="nav nav-pills nav-fill bg-white">
            <li className="nav-item">
                <a className="nav-link active" href="/"> <p className="d-block h4"><Emoji label="casa" symbol="🏠"></Emoji></p> Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <p className="d-block h4"><Emoji label="mensaje" symbol="📨"></Emoji></p> Messages</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <p className="d-block h4"><Emoji label="favoritos" symbol="⭐"></Emoji></p> Wishlist</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <p className="d-block h4"><Emoji label="configuracion" symbol="⚙"></Emoji></p> Settings</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <p className="d-block h4"><Emoji label="cuenta" symbol="👤"></Emoji></p> My Account</a>
            </li>
        </ul>
    </header>
);

export default Header;