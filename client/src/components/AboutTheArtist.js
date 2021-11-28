import { Avatar, IconButton, Typography } from "@material-ui/core";
import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function AboutTheArtist(props) {
        return (
        <div>
            <Typography component={'span'} variant={'h3'}>
              <h1> {props.name}  <Avatar src={props.profilePic}/> </h1> 
              
            </Typography>
            
            <Typography component={'span'}>
            <h3> {props.city}, {props.state}</h3>
              {props.bio}
            </Typography>

            <IconButton href={props.insta} target="_blank">
                <InstagramIcon fontSize="large"/>
            </IconButton>

            <IconButton href={props.faceBook} target="_blank">
                <FacebookIcon fontSize="large"/>
            </IconButton>

            <IconButton href={props.pinterest} target="_blank" >
                <PinterestIcon fontSize="large"/>
            </IconButton>

            <IconButton href={props.linkedIn} target="_blank">
                <LinkedInIcon fontSize="large"/>
            </IconButton>

            <IconButton href={props.twitter} target="_blank">
                <TwitterIcon fontSize="large"/>
            </IconButton>
        </div>
        );
}

