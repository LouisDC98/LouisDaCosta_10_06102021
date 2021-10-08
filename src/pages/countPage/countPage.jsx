import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { countData } from 'datas/count';
import Accordion from 'components/Accordion/Accordion';
import { transactions } from 'datas/transactions';

function CountPage() {
    let params = useParams();
    const currentCount = countData.find((element) => element.id === params.id);

    return (
        <div>
            <InfoCurentCount>
                <TitleCurrentCount>{currentCount.title}</TitleCurrentCount>
                <MontantCurrentCount>{'$' + currentCount.montant}</MontantCurrentCount>
                <DescriptionCurrentCount>{currentCount.description}</DescriptionCurrentCount>
            </InfoCurentCount>
            <BodyCountPage>
                <ColumnCoutPage>
                    <DateColumn>DATE</DateColumn>
                    <DescriptionColumn>DESCRIPTION</DescriptionColumn>
                    <AmountColumn>AMOUNT</AmountColumn>
                    <BalanceColumn>BALANCE</BalanceColumn>
                </ColumnCoutPage>
                {transactions.map((data) => (
                    <Accordion key={data.id} data={data} balance={currentCount.montant} />
                ))}
            </BodyCountPage>
        </div>
    );
}

const BodyCountPage = styled.div`
    background-color: #12002b;
    padding: 32px;
`;

const ColumnCoutPage = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding: 0 0 0 22%;
    color: white;
    font-weight: bold;
`;

const DateColumn = styled.p`
    padding: 0 0 0 0px;
    margin: 0;
`;

const DescriptionColumn = styled.p`
    padding: 0 0 0 0px;
    margin: 0;
`;

const AmountColumn = styled.p`
    padding: 0;
    margin: 0;
`;

const BalanceColumn = styled.p`
    padding: 0;
    margin: 0;
`;

const InfoCurentCount = styled.div`
    margin: 32px;
    text-align: center;
`;

const TitleCurrentCount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

const MontantCurrentCount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
`;

const DescriptionCurrentCount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

export default CountPage;
