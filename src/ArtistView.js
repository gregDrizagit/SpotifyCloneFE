import React from 'react'
import Adapter from './adapter'
import AlbumCard from './AlbumCard'
import { Grid, Image, Button, Card, Icon, Sticky, Segment, Container} from 'semantic-ui-react'

class ArtistView extends React.Component {

    state = {}
    fetchAlbums = (id) => {
        Adapter.getArtistAlbums(id).then(albums => this.setState({albums: albums})) 
    }

    fetchArtist = (id) => {
        Adapter.getArtist(id).then(artist => this.setState({artist: artist}))
    }

    handleContextRef = contextRef => this.setState({ contextRef })


    renderAlbums = () => {
        const albumCards = this.state.albums.items.map(album => {
            return <AlbumCard history={this.props.history} album={album} />
        })
        return albumCards
    }

    componentDidMount(){
        const artistId = this.props.location.state.artist
        this.fetchArtist(artistId.id); 
        this.fetchAlbums(artistId.id); 
    }

    render(){
        const { contextRef } = this.state
        if(this.state.albums && this.state.artist)
        {
            return(
                <div ref={this.handleContextRef}>
                    <Container>
                        <Grid>
                            <Grid.Column width={3}>
                            <Sticky context={contextRef} active>
                                 <Segment basic textAlign="center">
                                    <Image circular src={this.state.artist.images[0].url}/>
                                     <h1>{this.state.artist.name}</h1>
                                </Segment>
                            </Sticky>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Card.Group itemsPerRow={4}>
                                    {this.renderAlbums()}
                                </Card.Group>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            
            ); 
        }else{

            return(
                <h1>Loading...</h1>
            ); 
        }
    }
}

export default ArtistView;