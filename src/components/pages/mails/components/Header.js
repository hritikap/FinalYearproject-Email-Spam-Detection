import React from 'react';
import styled from 'styled-components';
import { Refresh } from '@material-ui/icons';

const Wrapper = styled.div`
  background-color: yellow;

  .refresh {
    width: 30px;
    background-color: white;
    border: 2px solid;
  }
`;

const Header = () => {
  const handleRefresh = (e) => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <div className='refresh' onClick={(e) => handleRefresh(e)}>
        <Refresh />
      </div>
    </Wrapper>
  );
};

export default Header;
