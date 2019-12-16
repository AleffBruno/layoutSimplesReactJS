import './Header.css';
import React from 'react';

export default function Header({icon, title, subtitle}) {
    return (
        // d-nome = celulares o header nao aparece
        // d-sm-flex = se o dispositivo for sm, use display flex
        // flex-column = ??
        // mt-3 = margin-top 3
        // lead = ??
        // text-muted = ??
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3"> 
                <i className={`fa fa-${icon}`}></i> {title}
            </h1>
            <p className="lead text-muted">
                {subtitle}
            </p>
        </header>
    )
}