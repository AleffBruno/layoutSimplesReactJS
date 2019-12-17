import './Nav.css';
import React from 'react';

export default function Nav() {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <a href="#/">
                    <i className="fa fa-home"></i> Inicio
                </a>
                <a href="#/users">
                    <i className="fa fa-users"></i> Usuarios
                </a>
            </nav>
        </aside>
    )
}