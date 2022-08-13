import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import Hero from "./components/Hero/Hero";
import AddComment from "./components/AddComment/AddComment";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import "./App.scss";
import videoDetail from "./data/videos.json";
import videos from "./data/video-details.json";

function randomVideoId(arr) {
  return Math.floor(Math.random() * arr.length);
}
function getVideo(array, id) {
  return array.find((video) => video.id === id);
}
const ranId = videos[randomVideoId(videos)].id;

class App extends Component {
  state = {
    videoId: ranId,
  };
  setVideoId = (id) => {
    this.setState((prevState) => {
      return {
        videoId: id,
      };
    });
  };

  render() {
    const video = getVideo(videos, this.state.videoId);
    const {comments,description,id,image,views,likes,title,channel} = video    
    const numberOfComments = comments.length;
    return (
      <div className="App">
        <Navbar />
        <Video videoId={id} image={image} />
        <div className="content__container">
          <div className="content__container--hac">
            <Hero
              videos={this.state.videos}
              setVideoId={this.setVideoId}
              videoId={id}
              description={description}
              channel={channel}
              views={views}
              likes={likes}
              title={title}
            />
            <AddComment numberOfComments={numberOfComments} />
            <Comments comments={comments} videoId={id} />
          </div>
          <div className="conten__container--nv">
            <NextVideos
              videoDetail={videoDetail}
              videoId={id}
              setVideoId={this.setVideoId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
