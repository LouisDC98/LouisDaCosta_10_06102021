import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import Accordion from 'components/Accordion/Accordion';
import { selectAccount, selectTransaction } from '../../utils/selectors';
import { useSelector } from 'react-redux';

function AccountPage() {
    let params = useParams();
    const transactions = useSelector(selectTransaction);
    const accountData = useSelector(selectAccount);
    const currentAccount = accountData.find((element) => element.id === params.id);

    return (
        <div>
            <InfoCurentAccount>
                <TitleCurrentAccount>{currentAccount.title}</TitleCurrentAccount>
                <MontantCurrentAccount>{'$' + currentAccount.montant}</MontantCurrentAccount>
                <DescriptionCurrentAccount>{currentAccount.description}</DescriptionCurrentAccount>
            </InfoCurentAccount>
            <BodyAccountPage>
                <ColumnCoutPage>
                    <DateColumn>DATE</DateColumn>
                    <DescriptionColumn>DESCRIPTION</DescriptionColumn>
                    <AmountColumn>AMOUNT</AmountColumn>
                    <BalanceColumn>BALANCE</BalanceColumn>
                </ColumnCoutPage>
                {transactions.map((data) => (
                    <Accordion key={data.id} data={data} balance={currentAccount.montant} />
                ))}
            </BodyAccountPage>
        </div>
    );
}

const BodyAccountPage = styled.div`
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

const InfoCurentAccount = styled.div`
    margin: 32px;
    text-align: center;
`;

const TitleCurrentAccount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

const MontantCurrentAccount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
`;

const DescriptionCurrentAccount = styled.p`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #2c3e50;
`;

export default AccountPage;
