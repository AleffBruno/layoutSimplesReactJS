import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string()
        .required('nome é requerido'),
    email: Yup.string()
        .email('coloque um e-mail valido')
        .required('e-mail é requerido'),
    password: Yup.string()
        .min(1, 'minimo uma letra')
        .required('senha e requierida'),
})

export default function SignUp() {
    function handleSubmit({name, email, password}) {
        // dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNwbo5YdcHCHIiM8DhCf1ukc9Fgt1EY7l7_UfvCPhjhQIwT2rt" alt="t" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" /> 
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="password" type="password" placeholder="Sua senha" />

                <button type="submit">Criar Conta</button>
                <Link to="/">ja tenho conta</Link>
            </Form>
        </>
    )
}