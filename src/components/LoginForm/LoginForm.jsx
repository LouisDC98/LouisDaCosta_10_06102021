import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function LoginForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <BlocForm>
            <IconForm />
            <TitleForm>Sign In</TitleForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <TextForm>Username</TextForm>
                    <InputForm {...register('Username', { required: true })} />
                </Form>
                <Form>
                    <TextForm>Password</TextForm>
                    <InputForm {...register('Password', { required: true })} />
                </Form>
                <CheckBox>
                    <input name="remember" type="checkbox" {...register('remember')} />
                    <TextCheckBox htmlFor="remember">Remember me</TextCheckBox>
                </CheckBox>

                <BtnLogin type="submit" title="Se connecter">
                    Sign In
                </BtnLogin>
            </form>
        </BlocForm>
    );
}

const Form = styled.div`
    text-align: start;
    margin-bottom: 16px;
`;

const TextForm = styled.p`
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
    padding: 0;
`;

const InputForm = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    width: 222px;
`;

const BlocForm = styled.div`
    margin: 0 auto;
    padding: 32px;
    width: 300px;
    background-color: white;
    box-sizing: border-box;
`;

const IconForm = styled(FaUserCircle)`
    color: #2c3e50;
`;

const TitleForm = styled.h1`
    font-size: 1.5rem;
    color: #2c3e50;
    margin: 18px 0 20px 0;
`;

const CheckBox = styled.div`
    text-align: start;
    margin-bottom: -1px;
`;

const TextCheckBox = styled.label`
    margin-left: 0.25rem;
    color: #2c3e50;
`;

const BtnLogin = styled.button`
    background-color: #00bc77;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    width: 252px;
    padding: 8px;
    margin-top: 16px;
    text-decoration: underline;
`;

export default LoginForm;
