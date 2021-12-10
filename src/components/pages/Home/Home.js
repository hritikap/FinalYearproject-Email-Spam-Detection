import styled from 'styled-components';
import Login from '../../auth/Login';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  /* background: linear-gradient(180deg, #4361db 100%, #9076e7 100%); */
  /* background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%); */
`;
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

const Left = styled.div`
 flex:2;

  img {
    width: 50%;
    height: 60%;
    display: block;
    margin-left: 80px;
    margin-right: auto;
    margin-top: 5px;
    border: none;
  }

  p {
    font-size: 28px;
    font-weight: bolder;
    color: green;
    line-height: 32px;

    padding-top: 100px;
    padding-left: 12rem;
  }
`;

const Right = styled.div`
  flex:1;
  margin-right:70px;
  
`;

const Home = () => {
  return (
    <Wrapper>
      <Left>
        <img alt='' src='/assets/spamlogo.png'></img>
        <p></p>
      </Left>
      <Right>
        <Login />
      </Right>
    </Wrapper>
  );
};

export default Home;
