import React from 'react'
import {Segment, Card, Image } from 'semantic-ui-react'

class BrowseCategoryCard extends React.Component {

    viewCategory = () => {
        this.props.history.push('/category', {
            category: this.props.category
        })
    }
    render(){ 
        return(
            <Card onClick={() => this.viewCategory()}>
                <Image src={this.props.category.icons[0].url} />
                <Card.Content><h3>{this.props.category.name}</h3></Card.Content>
            </Card>
        )
    }
}

export default BrowseCategoryCard