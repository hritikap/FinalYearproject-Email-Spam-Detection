import styled from 'styled-components';

export const AuthStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  background: #e9e9e9;
  display: flex;

  .loginContainer {
    padding: 60px;
    margin: auto;

    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 40px;
    /* background: radial-gradient(
      ellipse at left bottom,
      rgba(90, 24, 47, 1) 0%,
      rgba(58, 20, 72, 0.9) 59%,
      rgba(37, 27, 75, 0.9) 100%
    ); */
    /* background: linear-gradient(180deg, #4361db 0%, #9076e7 100%); */
    background: #000000; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #434343,
      #000000
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #434343,
      #000000
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    /* box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8); */
  }

  label {
    color: white;
    margin: 14px 0;
    display: block;
    font-size: 22px;
    line-height: 1;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 19px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    letter-spacing: 1px;
  }

  .btnContainer {
    width: 100%;
    padding: 24px 0;
  }

  button {
    border: none;
    outline: none;
    width: 100%;
    padding: 15px 0;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    background: #5e5c5c;
    cursor: pointer;
    :hover {
      color: #0c053b;
    }
  }
  p {
    margin: 14px 0 0 0;
    text-align: right;
    color: #fff;
  }
  span {
    a {
      color: yellow;
      font-weight: 500;
      letter-spacing: 0.5px;
      margin-left: 5px;
      cursor: pointer;
      transition: all 400ms ease-in-out;
    }
  }

  a {
    :hover {
      color: red;
    }
  }

  .errorMsg {
    color: red;
    font-size: 16px;
  }
`;
