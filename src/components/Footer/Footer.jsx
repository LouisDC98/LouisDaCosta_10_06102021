import React from 'react';
import styled from 'styled-components';

function Footer() {
    return <Copyright>Copyright 2020 Argent Bank</Copyright>;
}

const Copyright = styled.p`
    border-top: 2px solid #ccc;
    text-align: center;
    color: #2c3e50;
    padding: 2rem 0 1.5rem;
    margin: 0;
`;

export default Footer;
