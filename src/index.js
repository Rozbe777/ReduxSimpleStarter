import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const Youtube_API_KEY='AIzaSyBsA05XBBcm1HorOSnklcHtyYL2P3wnE9g';


class App extends Component {
  constructor  (props)  {
    super(props);
    this.state={ videos :[]};

     YTSearch({key:Youtube_API_KEY , term:'test'}, (videos) =>{
      // this.setState({videos:videos});
      console.log(videos);
      this.setState({videos});
    });

  }

  render(){
    return (
    <div>
    <SearchBar />
    <VideoDetail video={this.state.videos[1]} />
    <VideoList videos={this.state.videos} />

     </div>
    );
  }
}




ReactDom.render(<App />,document.querySelector('.container'));
