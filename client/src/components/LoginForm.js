<<<<<<< HEAD
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
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import Logo from "../img/logo.png";

const theme = createTheme();

export default function LoginForm() {
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
=======
import React, {useState, useContext} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container,createTheme,
  ThemeProvider, FormControlLabel, Checkbox, Paper
  } from '@material-ui/core';

import Logo from "../img/logo.png";
import { AuthContext } from '../context/AuthContext';

const theme = createTheme();

// class LoginPage extends React.Component {
//   state = {
//     redirectToReferrer: false,
//     failed: false,
//     email: "",
//     password: "",
//   }

//   fieldChanged = (name) => {
//     return (event) => {
//       let { value } = event.target;
//       this.setState({ [name]: value });
//     }
//   }

//   login = (e) => {
//     e.preventDefault();
//     const auth = this.context;
//     let { email, password } = this.state;
//     auth.authenticate(email, password)
//       .then((user) => {
//         this.setState({ redirectToReferrer: true });
//       })
//       .catch((err) => {
//         this.setState({ failed: true });
//       });
//   }

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } };
//     const { redirectToReferrer, failed } = this.state;

//     if (redirectToReferrer) {
//       return <Redirect to={from} />;
//     }

//     let err = "";
//     if (failed) {
//       err = <div className="alert alert-danger" role="alert">Login Failed</div>;
//     }

//     return (

//     <ThemeProvider theme={theme}>
//       {err}
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Paper variant="outlined">
//             <img src={Logo} alt="logo" />
//           </Paper>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={this.login} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link to="/Signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//     );
//   }
// }

// LoginPage.contextType = AuthContext

// export default LoginPage;



function LoginForm() {
  const context = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  const [failed, setFailed] = useState(false);

  const login = e => {
    console.log(e);
    e.preventDefault();
    const auth = context;
    const data = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    let email = data.get("email");
    let password = data.get("password");
    auth.authenticate(email, password)
      .then(user => {
        setRedirect(true);
      })
      .then( err => {
        setFailed(true);
      })
  }
  if(redirect){
    return <Redirect to="/" />
  }
  let err = "";
  if(failed){
    err = <Container>Login Failed</Container>;
  }
  return (
    <ThemeProvider theme={theme}>
      {err}
>>>>>>> proxy
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
            Sign in
          </Typography>
<<<<<<< HEAD
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
=======
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
>>>>>>> proxy
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
<<<<<<< HEAD
                <Link to="/client/src/pages/SignUp.js" variant="body2">
=======
                <Link to="/Signup" variant="body2">
>>>>>>> proxy
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
<<<<<<< HEAD
}
=======
}

export default LoginForm;
>>>>>>> proxy
