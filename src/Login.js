import Adapter from './adapter'
import React from 'react';

import { Grid, Image, Button, Icon, Segment, Sidebar, Header, Card, Container, Input, Menu } from 'semantic-ui-react'

class Login extends React.Component {

    render(){
        return(
            <Button href="http://localhost:3000/login">Log in to Spotify</Button>
        );
    }
}
export default Login 