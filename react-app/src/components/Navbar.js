import React from 'react';
import { Button, AppBar, Toolbar, Typography, ThemeProvider } from '@mui/material';
import theme from '.././hooks/useTheme.js'

function Navbar() {
  return (
    <div>
    <ThemeProvider theme={theme}>
    <AppBar position="static" color = "primary">
      <Toolbar>
        <Typography variant="h5">Rattigan's Reviews</Typography>
        <Button color="inherit" style={{ marginLeft: '40px' }}>TV Shows </Button>
        <Button color="inherit" style={{ marginLeft: '40px' }}>Movies </Button>
        <Button color="inherit" style={{ marginLeft: '40px' }}>Search </Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  </div>
  );
}

export default Navbar;
