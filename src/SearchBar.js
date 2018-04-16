import React from 'react'
import { Grid, Image, Button, Icon, Segment, Sidebar, Header, Card, Container, Input, Menu } from 'semantic-ui-react'
import Adapter from './adapter'

class SearchBar extends React.Component{

    state={input:""}

    handleChange = (e) => {
        this.setState({input: e.target.value}); 
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.input){

            Adapter.searchItem(localStorage.getItem("accessToken"), this.state.input).then(data => this.props.setSearchResults(data))

        }else{

            alert("Please enter a search query")
        }
    }
    render(){
        console.log(this.state.input)
        return(
            <div style={{paddingBottom: "5px"}}>
                <form onSubmit={this.handleSubmit}>
                 <Input icon="search" value={this.state.input} 
                  onChange={this.handleChange} placeholder="Search for songs" /> 
                </form>
            </div>
        )
    }

}

export default SearchBar