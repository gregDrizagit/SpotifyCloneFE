import React from 'react';
import {Segment, Icon, Container, Card, Image, Header} from 'semantic-ui-react';
import Adapter from './adapter';
import PlaylistCard from './PlaylistCard';

class CategoryView extends React.Component {

    state = {}
    renderPlaylistCards = () => {
        const playlistCards = this.state.playlists.items.map(list => {
            return <PlaylistCard history={this.props.history} playlist={list}/>
        })
        return playlistCards
    }
    componentDidMount(){
        console.log(this.props)
        Adapter.getCategory(this.props.location.state.category.id)
        .then(plists => this.setState({playlists: plists.playlists}));
    }

    render(){
        return(
            <Container>
                <h1>{this.props.location.state.category.name}</h1>
                {
                    this.state.playlists ? 
                        <Card.Group itemsPerRow={4} >
                            {this.renderPlaylistCards()}
                        </Card.Group>
                    :
                        null
                }
            </Container>
        )
    }
}
export default CategoryView