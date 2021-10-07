import React from 'react';
import styled from 'styled-components';

function Count(props) {
    const { title, montant, description } = props;
    return (
        <BgCount>
            <div>
                <TitleCount>{title}</TitleCount>
                <MontantCount>{montant}</MontantCount>
                <DescriptionCount>{description}</DescriptionCount>
            </div>
            <BtnCount>View transactions</BtnCount>
        </BgCount>
    );
}

const BgCount = styled.section`
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

const TitleCount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

const MontantCount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
`;

const DescriptionCount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

const BtnCount = styled.button`
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

export default Count;
