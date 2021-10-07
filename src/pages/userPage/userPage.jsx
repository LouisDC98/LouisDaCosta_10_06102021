import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import EditName from 'components/EditName/EditName';
import Count from 'components/Count/Count';

function UserPage() {
    let params = useParams();

    const count = [
        {
            montant: '$2,082.79',
            title: 'Argent Bank Checking (x8349)',
            description: 'Available Balance'
        },
        {
            montant: '$10,928.42',
            title: 'Argent Bank Savings (x6712)',
            description: 'Available Balance'
        },
        {
            montant: '$184.30',
            title: 'Argent Bank Credit Card (x8349)',
            description: 'Current Balance'
        }
    ];

    return (
        <BgUserPage>
            <TitleUserPage>Welcome back {params.id} !</TitleUserPage>
            <EditName />
            {count.map((data, index) => (
                <Count
                    key={index + 1}
                    montant={data.montant}
                    title={data.title}
                    description={data.description}
                />
            ))}
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
