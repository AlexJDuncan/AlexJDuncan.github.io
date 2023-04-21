import React from "react";
import Container  from  '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const Contact = () => {
  return (
    <Container sx={{display: "flex", flexFlow: "column", alignContent: "center", justifyContent: "space-around"}}>
        <Typography variant="h4" component="h4">Phone</Typography>
        <Typography  variant="h5" component="h5">(303) 330-5272</Typography>
        <Typography variant="h4" component="h4">E-Mail</Typography>
        <Link  variant="h5" href="mailto: alexduncan1@outlook.com" target="_blank">alexduncan1@outlook.com</Link>
        <Link  variant="h5" href="mailto: monkeymedic26@gmail.com" target="_blank">monkeymedic26@gmail.com</Link>
        <Typography variant="h4" component="h4">LinkedIn</Typography>
        <Link  variant="h5" href="https://www.linkedin.com/in/alexjduncan/" target="_blank">Alex Duncan</Link>
        <Typography variant="h4" component="h4">GitHub</Typography>
        <Link  variant="h5" href="https://github.com/AlexJDuncan" target="_blank">AlexJDuncan</Link>
    </Container>
  )
}

export default Contact;