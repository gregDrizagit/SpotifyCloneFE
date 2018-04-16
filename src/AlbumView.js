import React from 'react'; 
import { Grid, Image, Button, Icon, Sticky, Segment, Container} from 'semantic-ui-react'
import Adapter from './adapter'
import TrackCard from './TrackCard'; 
import PlayerControls from './PlayerControls'; 
class AlbumView extends React.Component {

    constructor(){
        super();
        this.state = {
            tracks: []
        }
    }

    fetchAlbumTracks = (id) => {
        Adapter.getTracks(id).then(tracks => this.setState({tracks: tracks.items}))
    }

    playAlbum = () => {
       const uri = this.props.location.state.album.uri;
       Adapter.playAlbum(uri).then(
        setTimeout(() => { 
            this.props.setCurrentlyPlaying() 
           }, 1000)
       ); 

    }
    handleContextRef = contextRef => this.setState({ contextRef })

    renderTracks = () => {
        const trackSegments = this.state.tracks.map(track => {
            return(
                <TrackCard number={track.track_number} 
                            uri={track.uri} 
                            setCurrentlyPlaying={this.props.setCurrentlyPlaying} 
                            name={track.name} 
                />
            )
        })
        return trackSegments; 
    }

    componentDidMount(){
        this.fetchAlbumTracks(this.props.location.state.album.id); 
    }
    
    render(){
        const album = this.props.location.state.album; 
        const { contextRef } = this.state

        return(
            <div ref={this.handleContextRef}>
            <Container>
                <Grid> 
                    <Grid.Column width={5}>
                        <Sticky context={contextRef} active>
                            <Segment basic textAlign="center">
                                <Image 
                                        src={album.images[0].url}
                                    />
                                <h1>{album.name}</h1>
                                <h3>{album.artists[0].name}</h3>
                            </Segment>
                        </Sticky>
                    </Grid.Column>
                    <Grid.Column width={11}>
                    <Icon size="huge" name="play" onClick={() => this.playAlbum()} />

                        {
                            this.state.tracks.length > 0 ? 
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
        ); 
    }
}

export default AlbumView