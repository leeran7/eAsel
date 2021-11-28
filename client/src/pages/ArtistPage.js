import React from 'react';
import AboutTheArtist from "../components/AboutTheArtist";
import PhotoGallery from "../components/PhotoGallery";

class ArtistPage extends React.Component{
    state ={
        artistName: "",
        artistCity: "",
        artistState:"",
        artistBio:"",
        artistInsta: "",
        artistFB:"",
        artistEtsy:"",
        artistPin:"",
        artistProfilePic:"",
        //artwork: [], ??? add artwork for this artists and send as prop to photoGallery? 
    }
    
    componentDidMount(){
        // include artistId in fetch call
        fetch('/api/users/artistid')
        .then(res=> res.json())
        .then(data=> this.setState({
            artistName: data.artistName,
            artistCity: data.city,
            artistState: data.state,
            artistBio: data.artistBio,
            artistInsta: data.instagram,
            artistFB:data.faceBook,
            artistEtsy:data.Etsy,
            artistPin: data.Pinterest,
            atistProfilePic: data.profilePic,
        })
        )
    }
    
    render(){
        return(
            <div>
            <AboutTheArtist 
            name={this.state.artistName} 
            city={this.state.city} 
            state={this.state.state} 
            profilePic={this.state.ArtistProfilePic} 
            bio={this.state.artistBio}
            insta={this.state.artistInsta}
            faceBook={this.state.artistFB}
            etsy={this.state.artistFB}
            pinterest={this.state.artistPin}
            />
            {/* send prop to photoGallery thats an array of all artist artwork?  */}
            <PhotoGallery />
            </div>
        );
    }
}


export default ArtistPage;