import { Avatar, IconButton, Typography } from "@material-ui/core";
import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';



export default function AboutTheArtist(props) {
        return (
        <div>
            <Typography>
              <h1>  {props.name} </h1>
              <Avatar img={props.profilePic}/>
            </Typography>
            
            <Typography>
              <h2> {props.city} , {props.state}</h2>
              {props.bio}
            </Typography>

            <IconButton src={props.insta}>
                <InstagramIcon fontSize="large"/>
            </IconButton>

            <IconButton src={props.faceBook}>
                <FacebookIcon fontSize="large"/>
            </IconButton>

            <IconButton src={props.pinterest}>
                <PinterestIcon fontSize="large"/>
            </IconButton>
        </div>
        );
}

