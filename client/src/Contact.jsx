import React from "react";
import Container  from  '@mui/material/Container';
import Typography from "@mui/material/Typography";

const Contact = () => {
  return (
    <Container>
        <Typography variant="h4" component="h4">Phone</Typography>
        <Typography  variant="h5" component="h5">(303) 330-5272</Typography>
        <Typography variant="h4" component="h4">E-Mail</Typography>
        <Typography  variant="h5" component="h5" href="mailto: alexduncan1@outlook.com" target="_blank">alexduncan1@outlook.com</Typography><br />
        <Typography  variant="h5" component="h5" href="mailto: monkeymedic26@gmail.com" target="_blank">monkeymedic26@gmail.com</Typography>
        <Typography variant="h4" component="h4">LinkedIn</Typography>
        <Typography  variant="h5" component="h5" href="https://www.linkedin.com/in/alexjduncan/" target="_blank">Alex Duncan</Typography>
        <Typography variant="h4" component="h4">GitHub</Typography>
        <Typography  variant="h5" component="h5" href="https://github.com/monkeymedic26" target="_blank">monkeymedic26</Typography>
    </Container>
  )
}

export default Contact;