import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Account(props) {
    const { title, montant, description, id } = props;

    return (
        <BgAccount>
            <div>
                <TitleAccount>{title}</TitleAccount>
                <MontantAccount>{montant}</MontantAccount>
                <DescriptionAccount>{description}</DescriptionAccount>
            </div>
            <Link to={'/account/' + id}>
                <BtnAccount>View transactions</BtnAccount>
            </Link>
        </BgAccount>
    );
}

Account.propTypes = {
    title: PropTypes.string,
    montant: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string.isRequired
};

const BgAccount = styled.section`
    display: block;
    background-color: white;
    width: 80%;
    margin: 33px auto 34px auto;
    padding: 1.5rem;
    box-sizing: border-box;
    @media (min-width: 720px) {
        display: flex;
        justify-content: space-between;
    }
`;

const TitleAccount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

const MontantAccount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
`;

const DescriptionAccount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

const BtnAccount = styled.button`
    height: 41px;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 16px;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    @media (min-width: 720px) {
        width: 200px;
        margin-top: 28px;
    }
`;

export default Account;
