import React from 'react';
import styled from 'styled-components';
import tree from '../../img/bank-tree.jpeg';

function Slogan() {
    return (
        <div>
            <TreeImg src={tree} />
            <BlocSlogan>
                <BoldText>No fees.</BoldText>
                <BoldText>No minimum deposit.</BoldText>
                <BoldText>High interest rates.</BoldText>
                <SloganText>Open a savings account with Argent Bank today!</SloganText>
            </BlocSlogan>
        </div>
    );
}

const TreeImg = styled.img`
    width: 100%;
    object-fit: cover;
    height: 300px;
    @media (min-width: 920px) {
        height: 400px;
    }
`;

const BlocSlogan = styled.div`
    background-color: white;
    position: absolute;
    top: 97px;
    right: 318px;
    width: 200px;
    height: 100px;
    padding: 32px;
    @media (min-width: 920px) {
        top: 146px;
        right: 82px;
        width: 300px;
        height: 147px;
    }
`;

const BoldText = styled.p`
    color: #2c3e50;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    @media (min-width: 920px) {
        font-size: 1.5rem;
    }
`;

const SloganText = styled.p`
    color: #2c3e50;
    font-size: 0.9rem;
    margin-bottom: 0;
    padding-bottom: 0;
    @media (min-width: 920px) {
        font-size: 1.2rem;
    }
`;

export default Slogan;
