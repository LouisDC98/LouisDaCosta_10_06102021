import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage() {
    return (
        <React.Fragment>
            <Header sign={'in'} />
            <Form>
                <LoginForm />
            </Form>
        </React.Fragment>
    );
}

const Form = styled.div`
    padding: 48px 0 20px 0;
    width: 100%;
    background-color: #12002b;
    text-align: center;
    @media (min-width: 920px) {
        padding: 48px 0 108px 0;
    }
`;

export default LoginPage;
