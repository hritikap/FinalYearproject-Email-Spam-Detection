import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { AccountBoxIcon } from '@mui/icons-material/AccountBox';

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
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

  color: white;
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

const Navbar = ({ user, setUser }) => {
  const handleClick = () => {
    setUser(false);
  };

  return (
    <NavbarStyled>
      <div className='logo'>
        <Link to='/'>SpamAlter</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li onClick={handleClick}>
              <Link to='/'>Logout</Link>
            </li>
            <li>
              <Link to='/profile'>{/* <AccountBoxIcon /> */}</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;