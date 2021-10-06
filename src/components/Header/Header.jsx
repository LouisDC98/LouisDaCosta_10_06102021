import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

function Header(props) {
    const { sign } = props;

    return (
        <NavHeader>
            <LogoHeader src={logo}></LogoHeader>
            {sign === 'out' ? (
                <ProfileHeader>
                    <FaUserCircle />
                    <LinkHeader to="/">UserName</LinkHeader>
                </ProfileHeader>
            ) : (
                ''
            )}
            <SignHeader to="/">
                {sign === 'in' ? <FaUserCircle /> : <FaSignOutAlt />}
                <LinkHeader>{sign === 'in' ? 'Sign In' : 'Sign Out'}</LinkHeader>
            </SignHeader>
        </NavHeader>
    );
}

const LogoHeader = styled.img`
    max-width: 100%;
    width: 200px;
`;

const NavHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
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
    width: 85px;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 8px;
    :hover {
        text-decoration: underline;
    }
`;

const ProfileHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75px;
`;

export default Header;
