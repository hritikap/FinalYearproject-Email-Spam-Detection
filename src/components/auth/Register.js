import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthStyled } from './Auth';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(emailRef.current.value, passwordRef.current.value);
    history.push('/');
  };

  return (
    <AuthStyled>
      <form onSubmit={handleSubmit} className='loginContainer'>
        <>
          <label>Email</label>
          <input type='email' autoFocus required ref={emailRef} />
          {/* <p className='errorMsg'>{emailError}</p> */}
          <label>Password</label>
          <input type='password' required ref={passwordRef} />
          {/* <p className='errorMsg'>{passwordError}</p> */}
        </>

        <div className='btnContainer'>
          <button>register</button>
        </div>

        <>
          <p>
            Already have an account?
            <span>
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </>
      </form>
    </AuthStyled>
  );
};

export default Register;
