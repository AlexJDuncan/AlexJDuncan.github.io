import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const PageStyle = styled.div`
height: 100%;
background: #28292B;
  color: white;
`;

const App = () => {
  return (
    <PageStyle>
      <Nav />
    </PageStyle>
  )
}

export default App;