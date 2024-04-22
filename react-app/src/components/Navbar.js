import React from 'react';
import { Button, AppBar, Toolbar, Typography, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '.././hooks/useTheme.js'
import style from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <AppBar position="static" color = "primary">
      <Toolbar>
        <Link className = {style.links} to="/">
        <Typography variant="h5">Rattigan's Reviews</Typography>
        </Link>
        <Link className = {style.links} to="/tv-shows">
        <Button color="inherit" style={{ marginLeft: '40px' }}>TV Shows </Button>
        </Link>
        <Link className = {style.links} to="/movies">
        <Button color="inherit" style={{ marginLeft: '40px' }}>Movies </Button>
        </Link>
        {/* <Link to="/destination"> */}
        <Button color="inherit" style={{ marginLeft: '40px' }}>Search </Button>
        {/* </Link> */}
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  </div>
  );
}

export default Navbar;
