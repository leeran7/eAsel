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
    // picture: "",
    notFound: false,
  }

  componentDidMount() {

    // fetch('https://random-data-api.com/api/users/random_user')
    // .then(res => res.json())
    // .then(data => {
    //   this.setState( prevState => ({
    //     artists:[...prevState.artists, ...data],
    //     loading: false,
    //   }));z
    // })
    // .catch(err => {
    //   this.setState({
    //     notFound: true,
    //   });
    // });
//}

    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        this.setState( prevState => ({
          artists:[...prevState.artists, ...data],
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

                        {this.state.artists.map(artist=> {
                          return <ArtistName artist={artist} />
                        })}
                    </Grid> 
            </Grid>
        </Container>
    )    
  }
}

export default ArtistList;
