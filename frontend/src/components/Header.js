import React, { useState } from 'react';
import { AppBar, Toolbar, Tab, Tabs,  ImageList, ImageListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import aero from '../images/aero.jpg';

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'green' }} position='sticky'>
        <Toolbar>
        <ImageList sx={{ width: 80, height: 50, marginRight: '10px' }}>
  <ImageListItem sx={{ padding: 0 }}>
    <img src={aero} alt="kl logo" style={{ width: '%', height: '150%', objectFit: 'cover' }} />
  </ImageListItem>
</ImageList>




        

          <div>
            <Tabs 
              sx={{ ml: 'auto' }} 
              textColor='yellow' 
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
              <Tab component={NavLink} to='/Logout'label="LOGOUT"/>
              
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;