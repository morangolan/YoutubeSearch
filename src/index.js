import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCrif0NIf6ob7yI4roHei42-EWcZx691yM';



//Create the component who produce the html of our app
class App extends Component { 
    constructor (props){
        super(props);
        this.state= {videos: [],
                    selectedVideo: null
                    };
        
        this.videoSearch('surfboard');
        
    }
    
    videoSearch (term) {
        YTSearch({key: API_KEY, term: term}, 
              (videos)=> { this.setState({videos: videos, selectedVideo: videos[0]});
            }); 
        }
    
    render(){
        
        const videoSearch = _.debounce ((term)=> {this.videoSearch(term)}, 300);
        return (<div>
                    <SearchBar onSearchTermChange= {videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        //PROPS:
                        //Callback function to set the selected Video
                        onVideoSelect={ selectedVideo=>this.setState({selectedVideo}) }
                        //List of all the video object from YT search
                        videos={this.state.videos} />
                </div>
                );  
    }
    
    
   
}


//take this component and put in in the page (the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
