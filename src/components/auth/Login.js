import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
// import { GlobalState } from '../../GlobalState';
import { AuthStyled } from './Auth';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(emailRef.current.value, passwordRef.current.value);

    history.push('/');
  };

  return (
    <AuthStyled>
      <form onSubmit={handleSubmit} className='loginContainer'>
        <>
          <label>Email</label>
          <input type='email' autoFocus required ref={emailRef} />

          <label>Password</label>
          <input type='password' required ref={passwordRef} />
        </>
        <div className='btnContainer'>
          <button>login</button>
        </div>

        <>
          <p>
            Dont have an account?
            <span>
              <Link to='/register'>Register</Link>
            </span>
          </p>
        </>
      </form>
    </AuthStyled>
  );
};

export default Login;
