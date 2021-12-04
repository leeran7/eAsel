import { Avatar, Divider, IconButton, Typography } from "@material-ui/core";
import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function AboutTheArtist(props) {
        const { artist, socials } = props;
        return (
        <div>
            
            <Typography component={'span'} variant={'h3'}>
                
              <h1> <Avatar height="80%" width="60%" alt="profilepic" src={artist.profilePic}/> {artist.firstName} {artist.lastName} </h1>
              
            </Typography>
            
            <Typography component={'span'}>
            <h3> {artist.city}, {artist.state}</h3>
              {artist.bio}
            </Typography>
            <Divider />
            <IconButton href={socials.instagram} target="_blank">
                <InstagramIcon fontSize="large"/>
            </IconButton>

            <IconButton href={socials.facebook} target="_blank">
                <FacebookIcon fontSize="large"/>
            </IconButton>

            <IconButton href={socials.pinterest} target="_blank" >
                <PinterestIcon fontSize="large"/>
            </IconButton>

            <IconButton href={socials.linkedin} target="_blank">
                <LinkedInIcon fontSize="large"/>
            </IconButton>

            <IconButton href={socials.twitter} target="_blank">
                <TwitterIcon fontSize="large"/>
            </IconButton>
            
            <Divider />
        </div>
        );
}

