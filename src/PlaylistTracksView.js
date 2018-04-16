import React from 'react'; 
import {Segment, Card, Sticky, Container, Image, Grid, Header} from 'semantic-ui-react';
import Adapter from './adapter';
import TrackCard from './TrackCard';

class PlaylistTracksView extends React.Component {

    state = {}
    componentDidMount(){
        const playlist = this.props.location.state.playlist
      
        this.fetchPlaylistTracks(playlist.owner.id, playlist.id); 
    }

    handleContextRef = contextRef => this.setState({ contextRef })

    fetchPlaylistTracks = (user, playlistid) => {
        Adapter.getPlaylistTracks(user, playlistid)
        .then(tracks => this.setState({tracks: tracks.items}))

    }

    renderTracks = () => {
        const trackSegments = this.state.tracks.map(track => {
            return(
                <TrackCard  history={this.props.history}
                            number={track.track.track_number} 
                            isFromPlaylist={true}
                            artist={track.track.artists[0]}
                            uri={track.track.uri} 
                            setCurrentlyPlaying={this.props.setCurrentlyPlaying} 
                            name={track.track.name} 
                />
            )
        })
        return trackSegments; 
    }

    render(){
        const { contextRef } = this.state
        const playlist = this.props.location.state.playlist; 


        return(
            <div ref={this.handleContextRef}>
            <Container>
                <Grid> 
                    <Grid.Column width={5}>
                        <Sticky context={contextRef} active>
                            <Segment basic textAlign="center">
                                <Image 
                                        src={playlist.images[0].url}
                                    />
                                <h1>{playlist.name}</h1>
                            </Segment>
                        </Sticky>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        {
                            this.state.tracks ? 
                                <Segment.Group>
                                    {this.renderTracks()}
                                </Segment.Group>
                            :

                            null

                        }
                    </Grid.Column>
                   
                </Grid>
            </Container>
        </div>
        )
    }
}

export default PlaylistTracksView; 