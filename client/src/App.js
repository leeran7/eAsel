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
import ArtistList from './pages/ArtistList';
import SellArtPage from './pages/SellArtPage';
import LoginForm from './components/LoginForm';
import BuyHomePage from './pages/BuyHomePage';

import { Container}  from "@material-ui/core";
import Navbar from './components/NavBar';
import './index.css';
import { AuthProvider  } from './context/AuthContext';
import SignUpForm from './components/SignUpForm';

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
                  <Route path="/Buy" component={BuyHomePage} />
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
