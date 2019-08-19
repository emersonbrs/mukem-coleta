import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/app-coleta.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  cpf: Yup.string().required('CPF ou CNPJ obrigatório'),
  adress: Yup.string().required('O endereço é obrigatório'),
  phone: Yup.string().required('O telefone é obrigatório'),
  select: Yup.string().required('Selecione uma opção'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="cpf" placeholder="Seu CPF ou CNPJ" />
        <Input name="adress" placeholder="Seu endereço" />
        <Input name="phone" placeholder="Seu telefone" />
        <select type="select">
          <option disabled value="option">
            Escolha uma opção
          </option>
          <option value="option">Catador</option>
          <option value="option">Residência</option>
          <option value="option">Empresa</option>
          <option value="option">Organização</option>
        </select>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
