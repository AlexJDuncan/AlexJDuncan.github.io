import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import BottomBar from './BottomBar';
import Entry from "./Entry";
import Contact from "./Contact";

const PageStyle = styled.div`
height: 100%;
background: #28292B;
color: white;
`;

const App = () => {
  return (
    <PageStyle>
      <Nav />
      {/* <Entry /> */}
      <Contact />
      <BottomBar />
    </PageStyle>
  )
}

export default App;