import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import EditName from 'components/EditName/EditName';
import Count from 'components/Count/Count';

function UserPage() {
    let history = useParams();

    return (
        <BgUserPage>
            <TitleUserPage>Welcome back {history.id} !</TitleUserPage>
            <EditName />
            <Count
                montant={'$2,082.79'}
                title={'Argent Bank Checking (x8349)'}
                description={'Available Balance'}
            />
            <Count
                montant={'$10,928.42'}
                title={'Argent Bank Savings (x6712)'}
                description={'Available Balance'}
            />
            <Count
                montant={'$184.30'}
                title={'Argent Bank Credit Card (x8349)'}
                description={'Current Balance'}
            />
        </BgUserPage>
    );
}

const BgUserPage = styled.div`
    background-color: #12002b;
    padding-bottom: 1px;
`;

const TitleUserPage = styled.h1`
    font-size: 2rem;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 21px;
    margin: 0 auto;
    color: white;
    width: 250px;
`;

export default UserPage;
