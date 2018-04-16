import React from 'react';
import {Segment, Grid, Container, Tab, Feed, Card } from 'semantic-ui-react'
import RecentlyPlayedCard from './RecentlyPlayedCard';
import BrowseCategoryCard from './BrowseCategoryCard'; 
import NewReleasesCard from './NewReleasesCard';




class Discover extends React.Component{

    renderRecentlyPlayed = () => {
        let tracks = this.props.recentlyPlayed.items.map((item) => {
            return <RecentlyPlayedCard history={this.props.history} item={item}/>
        })
        return tracks
    }

    renderBrowseCategories = () => {
    }

   
    createPanes = () => {

        const newReleases = this.props.newReleases.albums.items.map(item => {
            return <NewReleasesCard history={this.props.history} album={item} />
        })

         const browseCategories = this.props.browseCategories.categories.items.map( item => {
            return <BrowseCategoryCard history={this.props.history} category={item} />
        })


        const panes = [
            { menuItem: 'New Releases', render: () => <Tab.Pane attached={false}><Card.Group itemsPerRow={4} style={{padding:'20px'}}>{newReleases}</Card.Group></Tab.Pane>},   
            { menuItem: 'Browse', render: () => <Tab.Pane attached ={false}><Card.Group style={{padding:'20px'}} itemsPerRow={4}>{browseCategories}</Card.Group></Tab.Pane> }
          ]

       return panes
        
    }


    render(){
        console.log(this.props)
        return(
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Segment basic padded style={{height: window.innerHeight - 200, overflow: "scroll"}}>
                            <Feed>{this.renderRecentlyPlayed()}</Feed> 
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment basic padded style={{height: window.innerHeight - 200, overflow: "scroll"}}>
                            <Tab menu={{secondary:true, pointing: true}} panes={this.createPanes()}  />
                        </Segment>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        );
    }
}

export default Discover