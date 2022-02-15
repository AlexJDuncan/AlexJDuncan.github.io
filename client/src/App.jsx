import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import BottomBar from './BottomBar';
import Entry from "./Entry";
import Contact from "./Contact";
import Skills from "./Skills";

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
      {/* <Contact /> */}
      <Skills />
      <BottomBar />
    </PageStyle>
  )
}

export default App;