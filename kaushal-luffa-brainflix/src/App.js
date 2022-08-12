import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import Hero from "./components/Hero/Hero";
import AddComment from "./components/AddComment/AddComment";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import "./App.scss";
import  videoDetail from "./data/videos.json";
import  videos from "./data/video-details.json";

function randomVideoId (arr){
  return Math.floor(Math.random() * arr.length);
};
class App extends Component {
  state = {
    videoDetail,
    videos,
    videoId: videos[randomVideoId(videos)].id
  };
  setVideoId = (id) => {
    this.setState(prevState => {
      return{
        ...prevState,
        videoId: id
      }
    })
  }
  
  
  render() {
    
    const a =this.state.videos.find(video => {
      return (
        video.id === this.state.videoId
      )
    })
    const numberOfComments = a.comments.length
    
    return (
      <div className="App">
        <Navbar />
        <Video videoId={this.state.videoId} />
        <div className="content__container">
          <Hero videos={this.state.videos} setVideoId={this.setVideoId} videoId={this.state.videoId}/>
          <AddComment numberOfComments={numberOfComments}/>
          <Comments videos={this.state.videos} videoId={this.state.videoId} />
        </div>
        <NextVideos videoDetail={this.state.videoDetail} videoId={this.state.videoId} />
      </div>
    );
  }
}

export default App;
