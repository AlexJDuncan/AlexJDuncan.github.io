import React from 'react';
import Container from '@mui/material/Container';
import ProjectCard from './components/ProjectCard';
import ProjectData from './components/ProjectData';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Projects = () => {
  return (
    <Container sx={{marginTop: "20px", marginBottom: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h3" component="h3">PROJECTS</Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: 0 }}>Github Links will take you to the section I contributed to in the repository for that project.</Typography>
        <Typography variant="body1" component="p">Not all projects are currently deployed. If it is deployed I have provided the link to the deployed website</Typography>
      </Box>
      <Box sx={{display: "flex", flexFlow: "wrap", justifyContent: "center", gap: "20px", marginTop: "10px", marginBottom: "15px" }}>
        {ProjectData.map((info) => (
          <ProjectCard key={info.title} info={info} />
          ))}
      </Box>
    </Container>
  )
}

export default Projects;