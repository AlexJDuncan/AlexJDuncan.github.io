import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './Nav';
import Entry from './Entry';
import Contact from './Contact';
import Projects from  './Projects';
import BottomBar from './BottomBar';
import OverdriveOutfits from './components/Project Detail Pages/OverdriveOutfits';
import Smove from './components/Project Detail Pages/Smove';
import AllianceDrydocks from './components/Project Detail Pages/AllianceDrydocks';
import JAAvailTracker from './components/Project Detail Pages/JAAvailTracker';
import Portfolio from './components/Project Detail Pages/Portfolio';
import Container from '@mui/material/Container';


const App = () => {
  return (
  <Container maxWidth="xl" sx={{height: "100vh", display: "grid", gridTemplateRows: "1fr 4fr 1fr"}}>
    <Nav />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="Home" element={<Entry />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Projects/OverdriveOutfits" element={<OverdriveOutfits />} />
        <Route path="Projects/Smove" element={<Smove />} />
        <Route path="Projects/AllianceDrydocks" element={<AllianceDrydocks />} />
        <Route path="Projects/JAAvailTracker" element={<JAAvailTracker />} />
        <Route path="Projects/Portfolio" element={<Portfolio />} />
      </Routes>
    <BottomBar />
  </Container>
  )
}

export default App;