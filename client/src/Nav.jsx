import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from "react-router-dom";

const Nav = ()  => {

  return (
    <AppBar position="static" sx={{background: "white", boxShadow: "none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: "space-around"}}>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Alex Duncan
          </Typography>
          <Box sx={{display: "flex", flexFlow: "row"}}>
            <NavLink to="/">
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to="Projects">
              <Typography
                  variant="h6"
                  noWrap
                  component="h6"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                  }}
              >
                Projects
              </Typography>
            </NavLink>
            <NavLink to="Contact">
              <Typography
                  variant="h6"
                  noWrap
                  component="h6"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                  }}
              >
                Contact
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;