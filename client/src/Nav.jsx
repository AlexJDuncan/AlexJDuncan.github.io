import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from "react-router-dom";

const pages = ['Home', 'Projects', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nav = ()  => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                component="a"
                href="/"
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
                  component="a"
                  href="/"
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
                  component="a"
                  href="/"
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