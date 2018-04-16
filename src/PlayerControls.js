import React from 'react'
import {Button, Responsive, Icon, Segment, Sticky, Portal, Image, Header, Menu, Sidebar, Container } from 'semantic-ui-react'
import Adapter from './adapter'
class PlayerControls extends React.Component {

    state = {
        isPaused: false 
    }

    handlePause = () => {
        this.setState({isPaused: !this.state.isPaused});
        Adapter.pausePlayback(); 
    }

    handlePlay = () => {
        this.setState({isPaused: !this.state.isPaused});
        Adapter.resumePlay();
    }

    handleForward = () => {
        Adapter.nextTrack().then(
            setTimeout(() => { 
                this.props.setCurrentlyPlaying() 
               }, 1000)
            );
    }

    handleBack = () => {
        Adapter.lastTrack().then(
            setTimeout(() => { 
                this.props.setCurrentlyPlaying() 
               }, 1000)
            );
    }
  
    
    render(){
        return(
            <Segment style={{backgroundcolor: "black",position: "fixed", bottom:"0", width: "100%", textalign: "center"}}>
                <Image style={{float: "left"}} size="mini" src={this.props.currentlyPlaying.item.album.images[2].url}/>
                <div style={{padding:"10px"}}>
                    <Icon size="large" name="backward" onClick={() => this.handleBack()}  />
                    {
                        this.state.isPaused ?
                        <Icon size="large" name="play" onClick={() => this.handlePlay()} />
                        :
                        <Icon size="large" name="pause" onClick={() => this.handlePause()} />
                    }
                    <Icon size="large" name="forward" onClick={() => this.handleForward()} />
                    {'  '}{this.props.currentlyPlaying.item.name} - {this.props.currentlyPlaying.item.artists[0].name}

                </div>

            </Segment>
        );
    }
}
export default PlayerControls; 