import React, { Component } from "react";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import "./Video.scss";

class  Video extends Component {
  state={
    src: videos.find(video => video.id === this.props.videoId)
  }
  render(){

    return (
      <div className="video__container">
      <video
        
        controls
        poster={this.state.src.image}
        >
        {/* <source src={videoDetails[0].video} type="video/mp4" /> */}
      </video>
    </div>
  );
}
};

export default Video;
