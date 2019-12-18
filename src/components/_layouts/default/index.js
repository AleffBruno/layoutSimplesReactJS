import React from 'react';

import Logo from '../../../components/templates/Logo';
import Nav from '../../../components/templates/Nav';
import Footer from '../../../components/templates/Footer';
// import Routes from '../../../main/Routes';

export default function DefaultLayout({children}) {
    return (
        <div className="app">
            <Logo />
            <Nav />
            {/* <Routes /> */}
            {children}
            <Footer />
        </div>
    )
}