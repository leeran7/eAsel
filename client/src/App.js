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

import './index.css';


// function Navigation(props) {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
//       <Link className="navbar-brand" to="/">Micro Blog</Link>
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/posts/new">
//             Create a Micro Post
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/about-us">
//             About Us
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcdd2"
    },
    secondary: {
      main: "#b39ddb"
    }
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
