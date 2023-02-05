import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
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
            <Link to="/" className={"link-styles"} style={{ color: 'black', textDecoration: 'none'}}>
              WSAFELOGO
            </Link>
          </Typography>
          <Box sx={{ width: '100%', padding: 'none'}}>
          <Tabs centered sx={{ padding: 'none'}} className= "{tabs}">
            <Tab className={"tab-styles"} style={{color: 'black'}} label='Home' value="/" to="/" component={Link} />
            <Tab className={"tab-styles"} style={{color: 'black'}} label='About Us'/>
            <Tab className={"tab-styles"} style={{color: 'black'}} label='Contact Us'/>
            <Tab className={"tab-styles"} style={{color: 'black'}} label='Login' value="/login" to="/login" component={Link}/>
            <Tab className={"tab-styles"} style={{color: 'black'}} label='Sign Up' value="/signup" to="/signup" component={Link}/>
          </Tabs>
          </Box>
          
        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar