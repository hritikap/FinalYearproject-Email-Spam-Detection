import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Add, Inbox, Send, Error } from '@material-ui/icons';
import Model from './component/Model';

const ComposeButton = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  text-transform: capitalize;
  color: gray;
  padding: 15px;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
  font-size: large;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: red;
  }
`;

const Wrapper = styled.div`
  width: 200px;

  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 0.3;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

  color: gray;

  .top {
    margin-top: 50px;
  }
  .last {
    font-size: large;
    font-weight: bolder;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
    padding: 10px;
    border-radius: 10px;
    a {
      color: white;
    }
    :hover {
      background-color: white;
      a {
        color: red;
      }
    }
  }

  .bottom {
    margin-top: 20px;
    ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      li {
        font-size: 1.2rem;
        padding: 10px;
        text-transform: capitalize;
        width: 200px;
        border-left: none;
        border-right: none;
        font-weight: bolder;

        display: flex;
        align-items: center;

        a {
          color: white;
          box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
        }
        :hover {
          border-radius: 10px;
          background-color: #fff;
          a {
            color: red;
          }
        }
      }
    }
  }
`;

const Sidebar = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const toogleModal = () => {
    setModal(!modal);
  };

  const sendMail = (e) => {
    e.preventDefault();
    console.log(to, subject, body);
    setModal(!modal);
    setTo('');
    setBody('');
    setSubject('');
  };

  return (
    <>
      {user && (
        <Wrapper>
          <div className='top'>
            <ComposeButton onClick={toogleModal}>
              <Add />
              compose
            </ComposeButton>
            {modal && (
              <Model
                to={to}
                setTo={setTo}
                subject={subject}
                setSubject={setSubject}
                body={body}
                setBody={setBody}
                sendMail={sendMail}
                toogleModal={toogleModal}
              />
            )}
          </div>
          <div className='bottom'>
            <ul>
              <li>
                <Inbox />
                <Link to='/inbox'>Inbox</Link>
              </li>
              <li>
                <Send />
                <Link to='/sent-mails'>Sent Mail</Link>
              </li>
              {/* <li>
                <Error />
                <Link to='/spam'>Spam</Link>
              </li> */}
            </ul>
          </div>
          <div className='last'>
            <Link to='/spam-classifier'>Spam-Classifier</Link>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Sidebar;
