import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './api/youtube';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,    
    }

    ComponentDidMount = () => {
        this.handleSubmit('messi goals')
    }


    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyB19m_mdMszQzLcy6yg0tWCfzh9tIIp1sc',
            q: searchTerm, 
            }
        });
    //console.log(response.data.items);
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render (){
        const { selectedVideo, videos } = this.state;
        return(
            <Grid justify = 'center' container spacing={15}>
                <Grid item xs ={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar OnFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos = { videos } onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;