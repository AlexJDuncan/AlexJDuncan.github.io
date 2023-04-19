import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './Nav';


const App = () => {
  return (
    <Nav></Nav>
    // <PageStyle>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Entry />} />
    //     <Route path="Contact" element={<Contact />} />
    //     <Route path="Skills" element={<Skills />} />
    //     <Route path="Projects" element={<Projects />} />
    //   </Routes>
    // </PageStyle>
  )
}

export default App;