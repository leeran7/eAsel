import React, { useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';
import {
  Avatar,
  AppBar,
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List , ListItem ,ListItemIcon , ListItemText } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import PhotoGallery from '../components/PhotoGallery';
// import Stack from "@material-ui/core/Stack";

//include edit option- make this a form? to send edits to database. 

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </Container>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  avatar: {
    margin: 20,
    width: 150,
    height: 150
  }
}));

function ProfilePage(){
    //so , we need to make a profile page which shows the user profile if they're logged in, 
    //otherwise shows the login page. 
    //so if the userid is empty then it displays the login page, otherwise it displays the userprofile- from the userid feature in the
    //db. 
    const auth = useContext(AuthContext);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [soldArtworks, setSoldArtworks] = useState([]);
    const [purchasedArtworks, setPurchasedArtworks] = useState([]);
    const [likedArtworks, setLikedArtworks] = useState([]);
    const [loading, setLoading] = useState(false);
    const getSoldArtworks = () => {
      setLoading(true);
      fetch("/api/artworks/sold")
        .then(res => {
          if(res.ok){
            return res.json();
          }
        })
        .then(data => {
          getSoldArtworksData(data);
        })
        setLoading(false);
    }
    const getSoldArtworksData = async (data) => {
      let list = [];
      for(let item of data){
        const res = await fetch(`/api/artworks/${item.artworkId}`)
        const data = await res.json();
        if(res.ok){
          list.push(data);
        }
      }
      setSoldArtworks(list);
    }
    const getPurchasedArtworks = () => {
      setLoading(true);
      fetch("/api/artworks/purchased")
        .then(res => {
          if(res.ok){
            return res.json();
          }
        })
        .then(data => {
          getPurchasedArtworksData(data);
        })
        setLoading(false);
    }
    const getLikedArtworks = () => {
      setLoading(true);
      fetch("/api/liked")
        .then(res => {
          if(res.ok){
            return res.json();
          }
        })
        .then(data => {
          getLikedArtworksData(data);
        })
        setLoading(false);
    }
    const getLikedArtworksData = async (data) => {
      let list = [];
      // console.log(data)
      for(let item of data){
        // console.log(item.id)
        const res = await fetch(`/api/artworks/${item.artworkId}`)
        const data = await res.json();
        if(res.ok){
          list.push(data);
        }
      }
      // console.log(list);
      setLikedArtworks(list);
    }
    const getPurchasedArtworksData = async (data) => {
      let list = [];
      // console.log(data)
      for(let item of data){
        // console.log(item.id)
        const res = await fetch(`/api/artworks/${item.artworkId}`)
        const data = await res.json();
        if(res.ok){
          list.push(data);
        }
      }
      // console.log(list);
      setPurchasedArtworks(list);
    }
    useEffect(() => {
      getSoldArtworks();
      getPurchasedArtworks();
      getLikedArtworks();
    }, [])
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    if(!auth.isAuthenticated){
      return<LoginForm from="/profile" />
    } else {
     return (
       <Container 
           disablegutters="true"
          // xs={12} 
          className={classes.root}>
          <Grid
            container
            disablegutters="true"
            justifyContent="center"
          >
          
            <Avatar
              alt="profile pic"
              src={auth.user.profilePic}
              className={classes.avatar}

            />

            
            <TabPanel value={value} index={0}>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Name</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {auth.user.firstName} {auth.user.lastName}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Email</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{auth.user.email}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Social Media</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <InstagramIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={auth.user.instagram} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FacebookIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={auth.user.facebook} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PinterestIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={auth.user.pinterest} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LinkedInIcon fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={auth.user.linkedin} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TwitterIcon fontSize="large" href={auth.user.twitter} />
                      </ListItemIcon>
                      <ListItemText primary={auth.user.twitter} />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Bio</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{auth.user.bio}</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {auth.user.city} , {auth.user.state} {auth.user.zipcode}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </TabPanel>

            <TabPanel value={value} index={1}>
              Artworks Sold
              <PhotoGallery artwork={soldArtworks}/>
            </TabPanel>

            <TabPanel value={value} index={2}>
              Artworks Purchased
              <PhotoGallery artwork={purchasedArtworks}/>
            </TabPanel>
            
            <TabPanel value={value} index={3}>
              Artworks Liked
              <PhotoGallery artwork={likedArtworks}/>
            </TabPanel>
            
          </Grid>
          <Grid>
              <AppBar
                className={classes.AppBar} 
                position="sticky"
              >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
              >
                <Tab label="PROFILE" {...a11yProps(0)} />
                <Tab label="SOLD" {...a11yProps(1)} />
                <Tab label="BOUGHT" {...a11yProps(2)} />
                <Tab label="LIKED" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
          </Grid>
       </Container>
     );}
    

}

export default ProfilePage;