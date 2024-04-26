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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    role: '',
    email: '',
    password: '',
    allowExtraEmails: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'allowExtraEmails' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      axios
        .post('http://localhost:8081/insert', formData)
        .then((response) => {
          console.log(response.data);
          setRegistrationSuccess(true);
          toast.success('Registration successful');
          // Redirect to login page
          setTimeout(() => {
            window.location.href = '/login';
          }, 1000);
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('An error occurred during registration. Please try again later.');
        });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!data.role) {
      errors.role = 'Role is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '100px',
            marginBottom: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding: '20px',
            background: 'linear-gradient(to top left, #f7c4f3, #fceabb)',
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
                  value={formData.name}
                  onChange={handleChange}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  id="role"
                  name="role"
                  label="Role"
                  value={formData.role}
                  onChange={handleChange}
                  error={!!formErrors.role}
                  fullWidth
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
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
                  value={formData.email}
                  onChange={handleChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
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
                  value={formData.password}
                  onChange={handleChange}
                  error={!!formErrors.password}
                  helperText={formErrors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.allowExtraEmails}
                      onChange={handleChange}
                      name="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#00ccff',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#0099cc',
                },
              }}
              disabled={Object.keys(formErrors).length !== 0}
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
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>

      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default Registration;
