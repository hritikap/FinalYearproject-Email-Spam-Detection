import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Add, Inbox, Send } from '@material-ui/icons';

const Button = styled.button`
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
  /* align-items: center; */
  flex: 0.3;
  background-color: lightblue;

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
      color: black;
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
        a {
          color: black;
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

const sideList = [
  {
    id: 1,
    name: 'inbox',
    icon: { Inbox },
  },
  {
    id: 2,
    name: 'sent-mails',
    icon: { Send },
  },
  {
    id: 3,
    name: 'Spam',
    icon: '',
  },
];

const link = sideList.map((link) => {
  return (
    <li key={link.id}>
      <Link to={`/${link.name}`}>{link.name}</Link>
    </li>
  );
});

const Sidebar = ({ user }) => {
  return (
    <>
      {user && (
        <Wrapper>
          <div className='top'>
            <Button>
              <Add />
              compose
            </Button>
          </div>
          <div className='bottom'>
            <ul>{link}</ul>
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
