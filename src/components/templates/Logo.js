import './Logo.css';
import LogoImg from '../../assets/imgs/logo.png'
import React from 'react';

export default function Logo() {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={LogoImg} alt="logo" />
            </a>
        </aside>
    )
}