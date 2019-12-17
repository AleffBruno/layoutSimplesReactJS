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

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

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
                const list = this.getUpdatedList(resp.data);
                this.setState({
                    user: initialState,
                    list
                })
            })
    }
    
    getUpdatedList(user, add = true) {
        console.log(user);
        //remove o usuario da lista
        const list = this.state.list.filter(u => u.id !== user.id)
        //readiciona o usuario na lista na primeira posição
        if(add) list.unshift(user)
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

    load(user) {
        this.setState({user})
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false);  
            this.setState({list})
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        
        return (
            <Main {...headerProps} >
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}