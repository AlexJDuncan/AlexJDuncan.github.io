import React from 'react';
import Container from '@mui/material/Container';
import ProjectCard from './components/ProjectCard';
import ProjectData from './components/ProjectData';

const Projects = () => {
  return (
    <Container sx={{display: "flex", flexFlow: "wrap", gap: "20px"}}>
      {ProjectData.map((info) => (
        <ProjectCard key={info.title} info={info} />
      ))}
    </Container>
  )
}

export default Projects;