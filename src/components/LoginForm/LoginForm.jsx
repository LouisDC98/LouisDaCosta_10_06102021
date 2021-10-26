import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../features/loginSlice';
import { Errors } from 'datas/Errors';

function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        reset
    } = useForm();

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(login(data))
            .then(() => {
                history.push('/profile');
            })
            .catch((error) => {
                let formError = { inputName: '', message: '' };
                if (error === Errors.E_UNKUSER) {
                    formError.inputName = 'email';
                    formError.message = 'Utilisateur introuvable';
                } else if (error === Errors.E_BADPWD) {
                    reset({
                        ...data,
                        password: ''
                    });
                    formError.inputName = 'password';
                    formError.message = 'Mot de passe invalide';
                } else {
                    console.error(error);
                    return;
                }
                setError(formError.inputName, {
                    type: 'manual',
                    message: formError.message
                });
            });
    };

    return (
        <BlocForm>
            <IconForm />
            <TitleForm>Sign In</TitleForm>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <TextForm>Username</TextForm>
                    <InputForm type="email" {...register('email', { required: true })} />
                    {errors.email && <Error>{errors.email.message}</Error>}
                </Form>
                <Form>
                    <TextForm>Password</TextForm>
                    <InputForm type="password" {...register('password', { required: true })} />
                    {errors.password && <Error>{errors.password.message}</Error>}
                </Form>
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

const Error = styled.p`
    color: red;
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
    cursor: pointer;
`;

export default LoginForm;
