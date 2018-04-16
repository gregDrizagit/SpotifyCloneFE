import React from 'react'
import { Grid, Image, Button, Icon, Segment, Sidebar, Header, Card, Container, Input, Menu } from 'semantic-ui-react'
import Adapter from './adapter'
class TrackCard extends React.Component {

    componentDidMount(){
    }


    showArtist = () => {
        this.props.history.push('/artist' , {
            artist: this.props.artist 
        })
    }
      

    handlePlay = () => {

        Adapter.playTrack(this.props.uri).then(() => {
            setTimeout(() => { 
                this.props.setCurrentlyPlaying() 
               }, 1000)
        })
        
    }
    handleAdd = () => {
        
    }
    render(){
        return(
            <Segment>
                {
                    this.props.isFromPlaylist ? 

                    <h2>{this.props.number} . {this.props.name} <a onClick={() => this.showArtist()}>{this.props.artist.name}</a></h2>

                    :

                    <h2>{this.props.number} - {this.props.name}</h2>

                }

                <Icon onClick={() => this.handlePlay()} link name="play" />
                <Icon onClick={() => this.handleAdd()} link name="plus"/>
            </Segment>
        ); 
    }
}

export default TrackCard; 