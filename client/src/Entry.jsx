import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import selfPic from "./images/me2.jpeg";

const Entry = () => {
  return (
    <Container maxWidth="xl" sx={{display: "flex", flexFlow: "column",  height: "90vh", background: "black", alignItems: "center", justifyContent: "center"}}>
      <img src={selfPic} alt="Alex Duncan" width="250px" />
      <Typography variant="h6" component="h6" sx={{color: "white"}}>Hello, I'm Alex Duncan</Typography>
      <Typography variant="h5" component="h5" sx={{color: "white"}}>Web Developer | Software Engineer | Graphic Designer</Typography>
      <Typography variant="h6" component="h6" sx={{color: "white"}}>I'm a front end web developer based out of Aztec, NM</Typography>
    </Container>
  )
}

export default Entry;