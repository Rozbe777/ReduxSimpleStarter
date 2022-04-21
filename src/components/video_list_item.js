import React,{Component} from 'react';

class VideoListItem extends Component{
  constructor(props) {
    super(props);

    this.state={video:props.video}
  }

  render(){
    console.log(this.state.video);
    const imageUrl=this.state.video.snippet.thumbnails.default.url;
    return <li className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />

      </div>

      <div className="media-body">
        <div className="media-heading">
          {this.state.video.snippet.title}
        </div>


      </div>


    </div>

      </li>;
  }
}

export default VideoListItem;
