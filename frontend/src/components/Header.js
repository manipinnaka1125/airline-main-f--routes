import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs, ImageList, ImageListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import aero1 from '../images/aero1.png';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} position='sticky'>
        <Toolbar>
          <ImageList sx={{ width: 150, height: 80, marginRight: '10px' }}>
            <ImageListItem sx={{ padding: 0 }}>
              <img src={aero1} alt="kl logo" className="airplane-animation" style={{ width: '%', height: '150%', objectFit: 'cover' }} />
            </ImageListItem>
          </ImageList>

          <div>
            <Tabs 
              sx={{ ml: 'auto', color: 'black' }} // Set text color to black
              textColor='inherit' 
              indicatorColor='primary'
              value={value} 
              onChange={handleChange}  
            >
              <Tab component={NavLink} to='/home' label="Home"/>
              <Tab component={NavLink} to='/Book' label="BOOK NOW"/>
              <Tab component={NavLink} to='/Login' label="Login"/>
              <Tab component={NavLink} to='/Registration' label="Registration"/>
              <Tab component={NavLink} to='/contact' label="CONTACT"/>
              <Tab component={NavLink} to='/about' label="About Us"/>
              
              <Tab component={NavLink} to='/AdminLogin' label="ADMINLOGIN"/>
              <Tab component={NavLink} to='/Logout' label="LOGOUT"/>
             
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
