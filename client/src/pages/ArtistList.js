import React, { Component, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import ArtistName from '../components/ArtistName';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class ArtistList extends React.Component {
  state = {
    loading: true,
    artists: [],
    picture: "",
    notFound: false,
  }

  componentDidMount() {

    // fetch('https://random-data-api.com/api/lorem_flickr/random_lorem_flickr')
    // .then(res=> res.json())
    // .then(data => {
    //     this.setState({picture: data.image});
    // })
    // .catch(err => {
    //     this.setState({
    //       notFound: true,
    //     });
    // });

    // fetch('https://random-data-api.com/api/users/random_user')
    // .then(res => res.json())
    // .then(data => {
    //   this.setState( prevState => ({
    //     artists:[...prevState.artists, ...data],
    //     loading: false,
    //   }));
    // })
    // .catch(err => {
    //   this.setState({
    //     notFound: true,
    //   });
    // });
//}

    fetch('https://random-data-api.com/api/users/random_user')
      .then(res => res.json())
      .then(data => {
        this.setState( prevState => ({
          artists:[...prevState.artists, <ArtistName artist={data}/>],
          loading: false,
        }));
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    if(this.state.loading) {return <Loading />};
        return(
        <Container> 
            <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* add key  */}
                        {/* {this.state.artists.map(artist=> {
                          return <ArtistName artist={artist} />
                        })} */}
                        {this.state.artists}
                    </Grid> 
            </Grid>
        </Container>
    )    
  }
}

export default ArtistList;

// export default function ArtistList(){
   
//const [artists, setArtists] = useState([]);

//     useEffect(()=>{
//          fetch("/api/user/")
//          .then(res => res.json())
//          .then(data => setArtists(data))
//     } , [])
    
//     // async componentDidMount() {
//     //     const url = ";
//     //     const response = await fetch(url)
//     //     const data = await response.json();
//     //     setArtists.data.results[0];
//     // }

//     return(
//         <Container> 
//             <Grid container spacing={2}>
//                 {artists.map(artist => (
//                     <Grid item xs={12} sm={6} md={3}>
//                         console.log(artist.name);
//                         <Paper>{artist.name}</Paper>
//                         {/* <ArtistName name={artist}/> */}
//                     </Grid> 
                    
//                 ))}


//                 {/* <Grid item>
//                 <ArtistName name="Michael" />
//                 </Grid> */}
//             </Grid>
//         </Container>
//     )
// }