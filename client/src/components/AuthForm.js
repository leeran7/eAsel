import React from 'react'
import { 
    Grid, TextField, Typography, Link, Container, 
    Box, CssBaseline, Avatar , Button} from '@material-ui/core';
    import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
export default function AuthForm({type}) {
    return (
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {type}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
            {
                type === "Sign Up"
                    ?
                    <>
                    <Box    sx={{
                            marginTop: 8,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                           <TextField
                            margin="normal"
                            required
                            name="firstName"
                            label="First Name"
                            type="text"
                            id="firstName"
                        />
                        <TextField
                            margin="normal"
                            required
                            name="lastName"
                            label="Last Name"
                            type="text"
                            id="lastName"
                        /> 
                    </Box>
                        
                        <Box    sx={{
                            marginTop: 8,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <TextField
                            margin="normal"
                            required
                            name="city"
                            label="City"
                            type="text"
                            id="city"
                        />
                        <TextField
                            margin="normal"
                            required
                            name="zipcode"
                            label="Zip Code"
                            type="text"
                            id="zipcode"
                        />
                    </Box>

                        
                        <Box    sx={{
                            marginTop: 8,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                          <TextField
                            margin="normal"
                            name="facebook"
                            label="Facebook Link"
                            type="text"
                            id="facebook"
                        />
                        <TextField
                            margin="normal"
                            name="instagram"
                            label="Instagram Link"
                            type="text"
                            id="instagram"
                        />  
                    </Box>
                        
                        <Box    sx={{
                            marginTop: 8,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <TextField
                            margin="normal"
                            name="twitter"
                            label="Twitter Link"
                            type="text"
                            id="twitter"
                        />
                        <TextField
                            margin="normal"
                            name="linkedin"
                            label="Linked In"
                            type="text"
                            id="linkedin"
                        />
                    </Box>
                        
                    </>
                    : null
            }
            <Grid container>
              <Grid item>
                {
                    type === "Log In"
                        ?
                        <>
                        <Link href="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </>
                        :
                        <Link href="/login" variant="body2">
                            {"Have an account? Sign in"}
                        </Link>
                }
                
              </Grid>
              
            </Grid>
          </Box>
          <Button>Submit</Button>
        </Box>
      </Container>
    )
}
