import { AppBar, Toolbar, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "green" }}>
        <Toolbar>
          <LightbulbIcon />
          <Typography>
            <Link to="/" className={"link-styles"} style={{ color: 'black', textDecoration: 'none',}}>
              WSAFELOGO
            </Link>
          </Typography>
        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar