import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

const Classifier = styled.div`
  display: flex;

  margin: 0px 20px;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 200px;
  width: calc(100% - 250px);
  height: 100%;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  textarea {
    font-size: 1.2rem;
  }
`;
const Animation = styled.div`
  animation: 4s infinite ${keyframes(slideInDown)};
  background: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red,
    red,
    red
  );
  -webkit-background-clip: text;
  color: transparent;
`;
const Button = styled.button`
  background-color: blue;
  padding: 15px;
  color: white;
  font-size: large;
  border: none;
  border-radius: 20px;
  text-align: center;
  width: 200px;
  margin-top: 20px;
`;

const dictionary = ['bad', 'spam', 'virus'];

const SpamClassifier = () => {
  const [mail, setMail] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const mailArray = mail.split(' ');
    dictionary.forEach((word) => {
      if (mailArray.includes(word)) {
        alert('spam found', word);
        // } else {
        //   alert('this is ham', word);
      }
      console.log(word);
    });
  };

  return (
    <Classifier>
      <Animation>
        <h1>Check here for the spam mails</h1>
      </Animation>
      <Form>
        <textarea
          rows={10}
          cols={80}
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Button onClick={handleClick}>Check</Button>
      </Form>
    </Classifier>
  );
};

export default SpamClassifier;
