import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

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


export default function artistName({artist, picture}) { 

    return (
    <div>
         <Card sx={{maxWidth: 345}}>
                
                <CardActionArea href="#ArtistPage/artist.id">
                    <CardMedia
                    component="img"
                    height="100"
                    image= {picture}
                    alt="artist work"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                            {artist.first_name} {artist.last_name}
                         </Typography>
                     </CardContent>
                </CardActionArea>
            </Card> 
    </div>
    );
   
}
