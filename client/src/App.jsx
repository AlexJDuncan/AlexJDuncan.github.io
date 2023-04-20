import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './Nav';
import Entry from './Entry';
import Contact from './Contact';
import Projects from  './Projects';
import BottomBar from './BottomBar';


const App = () => {
  return (
    <div>
    <Nav />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="Home" element={<Entry />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    <BottomBar />
    </div>
    // </PageStyle>
  )
}

export default App;