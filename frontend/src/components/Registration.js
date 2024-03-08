import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

import Select from '@mui/material/Select';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function Registration() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post('http://localhost:8081/insert', {
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    })
      .then((response) => {
        console.log(response.data);
        setRegistrationSuccess(true);
      })
      .catch((error) => {
        if (error.response) {
          console.error('Server responded with an error status:', error.response.status);
          console.error('Server response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received from the server');
        } else {
          console.error('Error during request setup:', error.message);
        }
        console.error('Error config:', error.config);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
           
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:'100px',
            marginBottom:'200px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          
          {registrationSuccess && (
            <Typography variant="body2" color="text.secondary" align="center">
              You have been registered successfully!
            </Typography>
          )}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  id="role"
                  name="role"
                  label="Role"
                  defaultValue={0}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={0}>Select User</MenuItem>
                  <MenuItem value={1}>Flight crew</MenuItem>
                  <MenuItem value={2}>Traveller</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
export default Registration;
