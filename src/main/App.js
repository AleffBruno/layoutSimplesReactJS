import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import '../config/ReactotronConfig';

import { Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';

import history from '../services/history';
import store from '../store/index';
// import Logo from '../components/templates/Logo';
// import Nav from '../components/templates/Nav';
// import Footer from '../components/templates/Footer';

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                {/* <div className="app">
                    <Logo />
                    <Nav />
                    <Routes />
                    <Footer />
                </div> */}
                <Routes />
            </Router>
        </Provider>
    )
}