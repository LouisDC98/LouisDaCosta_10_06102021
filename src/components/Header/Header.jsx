import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

function Header() {
    const [sign, setSign] = useState('in');

    const handleClick = () => {
        if (sign === 'in') {
            setSign('out');
        } else setSign('in');
    };

    return (
        <NavHeader>
            <HomeLink to="/">
                <LogoHeader src={logo}></LogoHeader>
            </HomeLink>
            <button onClick={handleClick}>X</button>
            <BlocLink>
                {sign === 'out' && (
                    <ProfileHeader>
                        <FaUserCircle />
                        <LinkHeader to="/">name</LinkHeader>
                    </ProfileHeader>
                )}
                <SignHeader to="/login">
                    {sign === 'in' ? <FaUserCircle /> : <FaSignOutAlt />}
                    <LinkHeader>{sign === 'in' ? 'Sign In' : 'Sign Out'}</LinkHeader>
                </SignHeader>
            </BlocLink>
        </NavHeader>
    );
}

const BlocLink = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 300px;
`;

const HomeLink = styled(NavLink)`
    padding: 0;
    margin: 0;
`;

const LogoHeader = styled.img`
    max-width: 100%;
    width: 200px;
`;

const NavHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 20px;
    background-color: white;
`;

const LinkHeader = styled.p`
    padding: 0;
    margin: 0 0 0 5px;
    color: #2c3e50;
    font-weight: bold;
`;

const SignHeader = styled(NavLink)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90px;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 8px;
    :hover {
        text-decoration: underline;
    }
`;

const ProfileHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 150px;
    margin-right: 20px; ;
`;

export default Header;
