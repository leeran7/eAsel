import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

import Logo from "../img/logo.png";
import Login from '../pages/Login';

const theme = createTheme();

export default function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper variant="outlined">
            <img src={Logo} alt="logo" />
          </Paper>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="email"
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
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="birthday"
                    label="Birthday"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="city"
                  label="City"
                  type="text"
                  autoComplete="address-level2"
                />
              </Grid>          
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zipcode"
                  label="ZipCode"
                  type="text"
                  autoComplete="postal-code"
                />
              </Grid>              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="State"
                  label="State"
                  type="text"
                  autoComplete="address-level1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="url"
                  name="pintrest"
                  label="Pintrest"
                  id="pintrest"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="url"
                  name="twitter"
                  label="Twitter"
                  id="twitter"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="url"
                  name="instagram"
                  label="Instagram"
                  id="instagram"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="url"
                  name="facebook"
                  label="Facebook"
                  id="facebook"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="url"
                  name="LinkedIn"
                  label="LinkedIn"
                  id="LinkedIn"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Link to="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}