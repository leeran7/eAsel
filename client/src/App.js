import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import { createTheme, ThemeProvider, Toolbar } from '@material-ui/core';

//PAGES
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import ArtistPage from './pages/ArtistPage';
import SellArtPage from './pages/SellArtPage';
import LoginForm from './components/LoginForm';

import { Container}  from "@material-ui/core";
import Navbar from './components/NavBar';
import ArtistList from './pages/ArtistList';

import './index.css';
import { AuthProvider  } from './context/AuthContext';
import SignUpForm from './components/SignUpForm';
// var request = require('superagent');

// var clientID = 'bdb593999fa5f2db388b',
//     clientSecret = 'bb8b0c4c796b975776c1b27c41f420d3',
//     apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
//     xappToken;

// request
//   .post(apiUrl)
//   .send({ client_id: clientID, client_secret: clientSecret })
//   .end(function(res) {
//     xappToken = res.body.token; 
//   });

//   var traverson = require('traverson'),
//   JsonHalAdapter = require('traverson-hal'),
//   xappToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2MWEwMWUzZDAxNGUyNzAwMGNiNjg1YWYiLCJleHAiOjE2Mzg0OTUxNDcsImlhdCI6MTYzNzg5MDM0NywiYXVkIjoiNjFhMDFlM2QwMTRlMjcwMDBjYjY4NWFmIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjYxYTAzOTJiZjEyMTgzMDAwZTk4ZWI1MSJ9.pWGPXViybEqTZc6RVaVuXx9DIO1_s9BfzoL4AEzyCLo';

//   traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
//   const api = traverson.from('https://api.artsy.net/api').jsonHal();

//   api.newRequest()
//   .follow('artist')
//   .withRequestOptions({
//     headers: {
//       'X-Xapp-Token': xappToken,
//       'Accept': 'application/vnd.artsy-v2+json'
//     }
//   })
//   .withTemplateParameters({ id: 'andy-warhol' })
//   .getResource(function(error, andyWarhol) {
//     console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
//   });

const theme = createTheme({
  palette: {
    primary: {
      main: "#d50000"
    },
    secondary: {
      main: "#448aff"
    }
  },
  typography: {
    fontFamily: [
      "Roboto Condensed", "sans-serif" ,
    ],
    "fontSize": 15,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
   }
});

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <Container>
              <div className="App">
                <Navbar /> 
                {/* add this toolbar to push the rest of the content down on the page, so nothing is hidden by navabar */}
                <Toolbar /> 
                <Switch>
                  {/* <Route path="/" component={ArtistList} /> */}
                  <Route path="/SellWithUs" component={SellArtPage} />
                  <Route path="/ArtistList" component={ArtistList}/>
                  <Route path="/ArtistPage" component={ArtistPage} />
                  <Route path="/Login" component={LoginForm} />
                  <Route path="/Signup" component={SignUpForm} />
                </Switch>
              </div>
            </Container>
          </ThemeProvider>
        </Router>
      </AuthProvider>

      // <Router>
      //   <Navigation />
      //   <div className="container-fluid text-center">
      //     <div className="row justify-content-center">
      //       <Switch>
      //         <Route path="/posts/new" component={PostFormPage} />
      //         <Route path="/posts/:id" component={ShowPostPage} />
      //         <Route path="/about-us" component={AboutUsPage} />
      //         <Route path="/" component={PostsListPage} />
      //       </Switch>
      //     </div>
      //   </div>
      // </Router>
    );
  }
}


export default App;
