import React from 'react';
import styled from 'styled-components';
import chat from '../../img/icon-chat.png';
import money from '../../img/icon-money.png';
import security from '../../img/icon-security.png';

function Catch(props) {
    const { logo, title, subtitle } = props;

    let img;
    switch (logo) {
        case 'chat':
            img = chat;
            break;
        case 'money':
            img = money;
            break;
        case 'security':
            img = security;
            break;
    }

    return (
        <BlocCatch>
            <ImgCatch src={img} />
            <TitleCatch>{title}</TitleCatch>
            <SubtitleCatch>{subtitle}</SubtitleCatch>
        </BlocCatch>
    );
}

const BlocCatch = styled.div`
    background-color: white;
    text-align: center;
    width: 100%;
    padding: 40px 0;
    @media (min-width: 920px) {
        padding: 40px;
        width: 28%;
    }
`;

const ImgCatch = styled.img`
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 16px;
    height: 100px;
`;

const TitleCatch = styled.p`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 16px;
`;

const SubtitleCatch = styled.p`
    color: #2c3e50;
`;

export default Catch;
