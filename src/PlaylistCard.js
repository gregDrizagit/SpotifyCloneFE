import React from 'react'; 
import Adapter from './adapter';
import {Segment, Card, Image, Header} from 'semantic-ui-react';

class PlaylistCard extends React.Component {

    componentDidMount(){

    }

    viewPlaylist = () => {
        this.props.history.push('/playlist', {
            playlist: this.props.playlist
        })
    }

    render(){
        return(
            <Card
                onClick={() => {
                    this.viewPlaylist()
                }}
                image={this.props.playlist.images[0].url}>
            </Card>
        )
    }
}

export default PlaylistCard; 