import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AccountCircle } from '@material-ui/icons';

const NavbarStyled = styled.nav`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  /* background: linear-gradient(180deg, #4361db 0%, #9076e7 100%); */
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

  .logo {
    font-size: 2rem;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
`;

const MenuWrapper = styled.ul`
  position: absolute;
  top: 50px;
  right: 50px;
  border: 2px solid black;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    font-size: 1.2rem;
    border: 1px solid lightgray;
    padding: 10px;
  }
`;

const Navbar = ({ user, setUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleClick = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  if (showMenu) {
    return (
      <MenuWrapper>
        <li>email</li>
        <li>logout</li>
      </MenuWrapper>
    );
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu);

  return (
    <NavbarStyled>
      <div className='logo'>
        <Link to='/'>SpamEmailDetector</Link>
      </div>
      <ul>
        {currentUser && currentUser.email ? (
          <>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li onClick={handleClick}>
              <Link to='/'>Logout</Link>
            </li>
            <li onClick={handleShowMenu}>
              <AccountCircle />
            </li>
          </>
        ) : null}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
