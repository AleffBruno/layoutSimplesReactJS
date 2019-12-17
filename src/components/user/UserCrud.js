import React, { Component } from 'react';
import axios from 'axios';
import Main from '../templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuarios: create, delete, read, update'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {

    state = {...initialState}

    clear() {
        this.setState({
            user: initialState.user
        })
    }

    save() {
        // para dar o "refresh" na lista de usuarios, nao sera feitos Get no backend, em vez disso sera manipulado isso no front
        // essa função vai salvar / atualizar
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.date);
                this.setState({
                    user: initialState,
                    list
                })
            })
    }
    
    getUpdatedList(user) {
        //remove o usuario da lista
        const list = this.state.list.filter(u => u.id !== user.id)
        //readiciona o usuario na lista na primeira posição
        list.unshift(user)
        return list;
    }

    updateField(event) {
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">   
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" 
                                className="form-control" 
                                name="name" 
                                value={this.state.user.name} 
                                onChange={e => this.updateField(e)}
                                placeholder="digite o nome"
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">   
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" 
                                className="form-control" 
                                name="email" 
                                value={this.state.user.email} 
                                onChange={e => this.updateField(e)}
                                placeholder="digite o email"
                            />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps} >
                {this.renderForm()}
            </Main>
        )
    }
}