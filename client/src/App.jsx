import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import BottomBar from './BottomBar';
import Entry from "./Entry";

const PageStyle = styled.div`
height: 100%;
background: #28292B;
color: white;
`;

const App = () => {
  return (
    <PageStyle>
      <Nav />
      {/* <Home /> */}
      <Entry />
      <BottomBar />
    </PageStyle>
  )
}

export default App;