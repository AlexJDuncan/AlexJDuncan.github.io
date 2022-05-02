import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Skills" element={<Skills />} />
      </Routes>
      <BottomBar />
    </PageStyle>
  )
}

export default App;