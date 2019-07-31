import React from 'react';
// import { Route, Link } from 'react-router-dom';

import Emoji from './Emoji';

const Header = () => (
    <header>
        <ul className="nav nav-pills nav-fill bg-white">
            <li className="nav-item">
                <a className="nav-link active" href="/"> <b className="d-block h4"><Emoji label="casa" symbol="🏠"></Emoji></b> Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <b className="d-block h4"><Emoji label="mensaje" symbol="📨"></Emoji></b> Messages</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <b className="d-block h4"><Emoji label="favoritos" symbol="⭐"></Emoji></b> Wishlist</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <b className="d-block h4"><Emoji label="configuracion" symbol="⚙"></Emoji></b> Settings</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <b className="d-block h4"><Emoji label="cuenta" symbol="👤"></Emoji></b> My Account</a>
            </li>
        </ul>
    </header>
);

export default Header;