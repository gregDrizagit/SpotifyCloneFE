import React from 'react';
import Adapter from './adapter';
import SearchBar from './SearchBar';
import AlbumCard from './AlbumCard'; 
import Discover from './Discover';
import './Styles.css';

import {Segment, Card, Container } from 'semantic-ui-react'

class Home extends React.Component {

    state = {}
    
    setUser = (user) => {
        this.setState({user: user})
    }
    setSearchResults = (results) => {
        this.setState({searchResults: results})

    }

    showSearchResults = () => {

        let albums = this.state.searchResults.albums.items;

        let albumTitles = albums.map((album) => {return <AlbumCard history={this.props.history} album={album} />})

        return albumTitles; 
    }

    componentDidMount(){
        this.setState({user: this.props.user})
        this.getHomeScreenStuff(); 

    }

    renderDiscover = () => {
        if(this.state.recentlyPlayed && 
            this.state.newReleases && this.state.browseCategories){

            return(
                <Discover 
                history={this.props.history}
                browseCategories={this.state.browseCategories}
                newReleases={this.state.newReleases}
                recentlyPlayed={this.state.recentlyPlayed}  
            />
            )
        }
    }

   

    getHomeScreenStuff = () => {
        Adapter.getRecentlyPlayed().then(recs => this.setState({recentlyPlayed: recs}))
        Adapter.getNewReleases().then(releases => this.setState({newReleases: releases}))
        Adapter.browseCategories().then(categories => this.setState({browseCategories: categories}))
    }

    render(){
        if(this.state.user){
            return(
                <div>
                    <Container>
                        <SearchBar setSearchResults={this.setSearchResults} />
                        {
                            this.state.searchResults ? 
                                <Card.Group itemsPerRow={4}>{this.showSearchResults()}</Card.Group>
                            :
                            <Container style={{position: "fixed", padding:"20px"}}>
                                {this.renderDiscover()}
                            </Container>
                        }
                    </Container>
                </div>
            );
        }else{
            return(
                <h1>Loading...</h1>
            )
        }
    }
}
export default Home 