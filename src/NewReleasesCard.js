import React from 'react'; 
import {Container, Card } from 'semantic-ui-react'

class NewReleasesCard extends React.Component{

    viewAlbum = (album) => {
        this.props.history.push("/album", {
            album: album
        })
    }

    render(){
        return(
            <Card
            onClick={() => this.viewAlbum(this.props.album)}
            image={this.props.album.images[1].url}
            header={this.props.album.artists[0].name}
            meta={this.props.album.name}
          />
        );
    }
}

export default NewReleasesCard; 