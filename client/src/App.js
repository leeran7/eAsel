import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, Toolbar } from '@material-ui/core';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Navbar from './components/NavBar';
import SellArtPage from './pages/SellArtPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { mergeClasses } from '@material-ui/styles';
import toolbar from '@material-ui/core/Toolbar';

import './index.css';

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
      <Router>
        <ThemeProvider theme={theme}>

          <Container>

            <div clasName="App">
              <Navbar /> 

              {/* add this toolbar to push the rest of the content down on the page, so nothing is hidden by navabar */}
              <Toolbar /> 
              <Route path="/SellWithUs" component={SellArtPage} />
            </div>
          </Container>
        </ThemeProvider>
      </Router>

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
