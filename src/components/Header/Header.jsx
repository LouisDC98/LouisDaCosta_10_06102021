import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectToken } from 'utils/selectors';
import { selectUser } from 'utils/selectors';
import { resetToken } from '../../features/loginSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function Header() {
    let token = useSelector(selectToken);
    let user = useSelector(selectUser);
    const dispatch = useDispatch();

    let isLogin = token.data != null;
    let history = useHistory();

    const handleClick = () => {
        if (isLogin) {
            history.push('/');
            dispatch(resetToken());
        } else {
            history.push('/login');
        }
    };

    return (
        <NavHeader>
            <HomeLink to="/">
                <LogoHeader src={logo}></LogoHeader>
            </HomeLink>
            <BlocLink>
                {isLogin && (
                    <ProfileHeader>
                        <FaUserCircle />
                        <LinkHeader to="/">{user.user?.firstName}</LinkHeader>
                    </ProfileHeader>
                )}
                <SignHeader onClick={handleClick}>
                    {isLogin ? <FaSignOutAlt /> : <FaUserCircle />}
                    <LinkHeader>{isLogin ? 'Sign Out' : 'Sign In'}</LinkHeader>
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

const SignHeader = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
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
