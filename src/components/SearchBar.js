import React from 'react';
import { Paper, TextField } from '@material-ui/core';


class SearchBar extends React.Component{
    state ={
        searchTerm:'',
        }
    handleChange = (event) => this.setState({ searchTerm:event.target.value });
    
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { OnFormSubmit } = this.props;

        OnFormSubmit(searchTerm);

        event.preventDefault();  //Prevents refreshing every time press enter when searching
    }
    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label='Search...' onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;