import React, { Component } from 'react';
import Adapter from './adapter';

import {BrowserRouter as Router, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Script from 'react-load-script';
import Nav from './Nav';

import AlbumView from './AlbumView';
import ArtistView from './ArtistView'; 
import CategoryView from './CategoryView'
import PlaylistTracksView from './PlaylistTracksView'
import queryString from 'query-string'
import {Button, Segment, Input} from 'semantic-ui-react';
import {Helmet} from 'react-helmet';

import 'semantic-ui-css/semantic.min.css';
import './Styles.css';

import Home from './Home';
import Login from './Login';
import SpotifyPlayer from './SpotifyPlayer'; 
import PlayerControls from './PlayerControls'
var Spotify = require('spotify-web-api-js');

class App extends Component {

  constructor()
  {
    super();

    this.state = {
      accessToken: ""
  
    }
  }


  componentDidMount()
  {

    let parsedString = queryString.parse(window.location.hash);
    let parsedAccessToken = parsedString["access_token"];
    this.setState({accessToken: parsedAccessToken});
    localStorage.setItem("accessToken", parsedAccessToken); 
    Adapter.getProfile(parsedAccessToken, this.setUser);

  }

  setCurrentlyPlaying = () => {
    Adapter.getCurrentlyPlaying().then(currentlyPlaying => this.setState({currentlyPlaying: currentlyPlaying }))
  }

  setUser = (user) => {
    this.setState({user: user})
  }

  render() {

    if(this.state.accessToken && this.state.user){
      return(
        <div>
            <Nav history={this.props.history} user={this.state.user}/> 
            <Switch>

              <Route exact path="/" render={(routerProps) => {return <Home {...routerProps} user={this.state.user} token={this.state.accessToken} /> }}/>
              <Route exact path="/album" render={(routerProps) => {return <AlbumView {...routerProps} setCurrentlyPlaying={this.setCurrentlyPlaying} /> }}/>
              <Route exact path="/artist" render={(routerProps) => {return <ArtistView {...routerProps} setCurrentlyPlaying={this.setCurrentlyPlaying} /> }}/>
              <Route exact path="/category" render={(routerProps) => {return <CategoryView {...routerProps} setCurrentlyPlaying={this.setCurrentlyPlaying} /> }}/>
              <Route exact path="/playlist" render={(routerProps) => {return <PlaylistTracksView {...routerProps} setCurrentlyPlaying={this.setCurrentlyPlaying} /> }}/>

              {/* <Route component={<Login />}/> */}
            </Switch>

            {
              this.state.currentlyPlaying ? 
              <div>
                <PlayerControls currentlyPlaying={this.state.currentlyPlaying} setCurrentlyPlaying={this.setCurrentlyPlaying} />
              </div>
              :
                null
            }
        </div>
      );
    }else{
      return(
          <Login />
      );
    }
  }

}

export default withRouter(App);
