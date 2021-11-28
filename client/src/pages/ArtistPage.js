import React from 'react';
import AboutTheArtist from "../components/AboutTheArtist";
import PhotoGallery from "../components/PhotoGallery";

//question: how do I get the userId for this artist????? 
class ArtistPage extends React.Component{
    state ={
        artistFirstName: "",
        artistLastName:"",
        artistCity: "",
        artistState:"",
        artistBio:"",
        artistProfilePic:"",
        artistInsta:'',
        artistFB:"",
        artistTwitter:"",
        artistPin:"",
        artistLinkedIn:"",
        artwork: [],//fetches sample artwork here and passes as prop to photoGallery component
    }
    
    componentDidMount(){
        // include artistId in fetch call +this.state.artistName.userId
        fetch('/api/users/')
        .then(res=> res.json())
        .then(data=> this.setState({
            artistFirstName: data.firstName, 
            artistLastName: data.lastName,
            artistCity: data.city,
            artistState: data.state,
            artistBio: data.bio,
            atistProfilePic: data.profilePic,
        }))
        .catch(err => {
            this.setState({
              notFound: true,
            });
          });

        //include userId endpoint in the fetch call + this.state.artistName.userId
        fetch('/api/socials/')
        .then(res=> res.json())
        .then(data=> this.setState({
            artistInsta: data.instagram,
            artistFB:data.facebook,
            artistPin: data.pinterest,
            artistLinkedIn: data.linkedin,
            artistTwitter: data.twitter,
        }))     
        .catch(err => {
            this.setState({
              notFound: true,
            });
          });

        fetch("/api/sampleArtwork/")
        .then(res=> res.json())
        .then(data=> this.setState({
            artwork: [...this.state.artwork,
                       data.image]
        }))
        .catch(err => {
            this.setState({
              notFound: true,
            });
          });
    }
    
    render(){
        return(
            <div>
            <AboutTheArtist 
            firstName={this.state.artistFirstName}
            lastName={this.state.artistLastName} 
            city={this.state.city} 
            state={this.state.state} 
            profilePic={this.state.artistProfilePic} 
            bio={this.state.artistBio}
            insta={this.state.artistInsta}
            faceBook={this.state.artistFB}
            linkedIn={this.state.artistLinkedIn}
            twitter={this.state.artistTwitter}
            pinterest={this.state.artistPin}


            // name="Micheal Brown" 
            // city="Brooklyn" 
            // state="New York" 
            // profilePic="https://randomuser.me/api/portraits/men/10.jpg"
            // bio="Hi my name is Michel, I was born and bread in brooklyn NY 
            // Hi my name is Michel, I was born and bread in brooklyn NY Hi my name is Michel, 
            // I was born and bread in brooklyn NY
            // Hi my name is Michel, 
            // I was born and bread in brooklyn NY Hi my name is Michel, I
            // was born and bread in brooklyn NY Hi my name is Michel,
            // I was born and bread in brooklyn NY  "
            // insta='https://www.instagram.com/noahdneiman/'
            // faceBook={this.state.artistFB}
            // linkedIn={this.state.artistLinkedIn}
            // twitter={this.state.artistTwitter}
            // pinterest={this.state.artistPin}
            />
            {/* send prop to photoGallery thats an array of all artist artwork?  */}
            <PhotoGallery artwork={this.state.artwork}/>
            </div>
        );
    }
}


export default ArtistPage;