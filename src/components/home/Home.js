import React from 'react';
import Main from '../templates/Main';

export default function Home(props) {
    return (
        <Main icon="home" title="Inicio" subtitle="Segundo titulo">
            <div className="display-4">Bem vindo</div>
            <hr/>
            <p className="mb-0">Sistema de cadastro usando react, aqui vai ter um form</p>
        </Main>
    )
}