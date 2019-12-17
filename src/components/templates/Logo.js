import './Logo.css';
import LogoImg from '../../assets/imgs/logo.png'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={LogoImg} alt="logo" />
            </Link>
        </aside>
    )
}