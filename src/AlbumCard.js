import React from 'react'; 
import { Card} from 'semantic-ui-react'

class AlbumCard extends React.Component {

    viewAlbum = (album) => {
        this.props.history.push("/album", {
            album: album
        })
    }
    

    render(){
        return(
            <Card
            onClick={() => this.viewAlbum(this.props.album)}
            fluid={true}
            image={this.props.album.images[1].url}
            header={this.props.album.name}
            meta={this.props.album.artists[0].name}
          />
        );
    }
}
export default AlbumCard; 