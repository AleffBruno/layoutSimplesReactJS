import React, { Component } from 'react';
import Main from '../templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuarios: create, delete, read, update'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps} >
                Usuario
            </Main>
        )
    }
}