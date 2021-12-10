import React from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia, CardContent, Typography, CardActionArea} from '@material-ui/core/';

export default function ArtistName({artist, picture}) { 

    return (
    <div>
         <Card sx={{maxWidth: 345}}> 
                <CardActionArea  href={`/ArtistPage/?id=${artist.id}`}>
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
