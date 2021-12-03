import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

export default function ArtistName({artist, picture}) { 

    return (
    <div>
         <Card sx={{maxWidth: 345}}> 
         {/* add userId to artistPage endpoint */}
                <CardActionArea id={artist.id} href={`/artist/`}>
                    <CardMedia
                    component="img"
                    height="100"
                    image= {artist.profilePic}
                    alt="artist work"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                            {artist.firstName} {artist.lastName}
                         </Typography>
                     </CardContent>
                </CardActionArea>
            </Card> 
    </div>
    );
   
}
