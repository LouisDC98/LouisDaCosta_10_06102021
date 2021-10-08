import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import EditName from 'components/EditName/EditName';
import Count from 'components/Count/Count';
import { countData } from 'datas/count';

function UserPage() {
    let params = useParams();

    return (
        <BgUserPage>
            <TitleUserPage>Welcome back {params.id} !</TitleUserPage>
            <EditName />
            {countData.map((data) => (
                <Count
                    key={data.id}
                    montant={'$' + data.montant}
                    title={data.title}
                    description={data.description}
                    id={data.id}
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
