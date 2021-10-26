import React, { useEffect } from 'react';
import styled from 'styled-components';
import EditName from 'components/EditName/EditName';
import Account from 'components/Account/Account';
import { accountData } from 'datas/account';
import { useDispatch } from 'react-redux';
import { getProfile } from 'features/userSlice';
import { selectUser } from 'utils/selectors';
import { useSelector } from 'react-redux';

function UserPage() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <BgUserPage>
            <TitleUserPage>Welcome back {user?.data?.firstName} !</TitleUserPage>
            <EditName />
            {accountData.map((data) => (
                <Account
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
