import React from 'react'; 
import {Segment, Icon, Container, Image, Header} from 'semantic-ui-react'

class Nav extends React.Component {

    goBack = () => {
        this.props.history.goBack()

    }

    goForward = () => {
        this.props.history.goForward()

    }
    render(){
        return(
            <Container>
                <Header icon style={{padding:"15px"}}>
                    <Icon onClick={() => this.props.history.push('/')} size="massive" name="spotify" />
                    <Header.Subheader>
                        {/* {' '} Welcome back, {this.props.user.id}. */}
                    </Header.Subheader>
                </Header>
                <Segment basic style={{paddingTop:"20px"}} floated="right">
                    <Icon size="large" name="chevron left" onClick={() => this.goBack()}/>
                    <Icon size="large" name="chevron right" onClick={() => this.goForward()} />
                </Segment>
            </Container>
        );
    }
}

export default Nav