import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import selfPic from "./images/me2.jpeg";
import selfPic2 from './images/me3.jpg';

const Entry = () => {
  return (
    <Container maxWidth="xl" sx={{display: "flex", flexFlow: "column", alignItems: "center", justifyContent: "center"}}>
      <img src={selfPic2} alt="Alex Duncan" width="250px" />
      <Typography variant="h6" component="h6">Hello, I'm Alex Duncan</Typography>
      <Typography variant="h5" component="h5">Software Engineer | Graphic Designer</Typography>
      <Typography variant="h6" component="h6">I'm a front end web developer based out of Aztec, NM</Typography>
    </Container>
  )
}

export default Entry;