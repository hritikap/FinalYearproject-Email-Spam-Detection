import React from 'react';
import styled from 'styled-components';
import { mailList } from '../../../dummyData';
import Header from './components/Header';

const Inboxwrapper = styled.div`
  display: flex;

  margin: 0px 20px;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 200px;
  width: calc(100% - 250px);
  height: 100%;
`;

const BodyWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    li {
      border: 2px solid lightgray;
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
      border-top: none;
      border-left: none;
      border-right: none;
      font-weight: bold;
      padding: 10px;
    }
  }
`;

const list = mailList.map((mail, index) => {
  return (
    <li key={index}>
      <p>{mail.name}</p>
      <p>{mail.subject}</p>
      <p>{mail.time}</p>
    </li>
  );
});

const Inbox = () => {
  return (
    <Inboxwrapper>
      <Header />
      <BodyWrapper>
        <ul>{list}</ul>
      </BodyWrapper>
    </Inboxwrapper>
  );
};

export default Inbox;
