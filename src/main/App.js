import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import Main from '../components/templates/Main';
import Footer from '../components/templates/Footer';

export default function App() {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main icon="home" title="Inicio" subtitle="Segundo titulo"/>
            <Footer />
        </div>
    )
}