import React from 'react'
import {Segment, Card, Feed, Container } from 'semantic-ui-react'


class RecentlyPlayedCard extends React.Component {

    calculateDateOfPlay = (dateOfPlay) => {
        let today = new Date(); 
    
        let secondsSince = Math.abs(dateOfPlay - today) / 1000
        let minutesSince = secondsSince / 60;
        let hoursSince = minutesSince / 60
        let daysSince = hoursSince / 24

        return `${Math.round(daysSince)} days ago`;
    }

    showArtist = () => {
        this.props.history.push("/artist", {
            artist: this.props.item.track.artists[0]
        })
    }
    render(){
        return(
            <Feed.Event>
            <Feed.Label image={this.props.item.track.album.images[2].url} />
                <Feed.Content>
                <Feed.Date content={this.calculateDateOfPlay(new Date(this.props.item.played_at))}/>
                <Feed.Summary>
                    {this.props.item.track.name} by <a onClick={() => this.showArtist()}>{this.props.item.track.artists[0].name}</a>
                </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

        )
    }
}
export default RecentlyPlayedCard