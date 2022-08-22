import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import Hero from "./components/Hero/Hero";
import AddComment from "./components/AddComment/AddComment";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import "./App.scss";
import nextVideos from "./data/videos.json";
import videosFullData from "./data/video-details.json";

function randomVideoId(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getVideo(array, id) {
  return array.find((video) => video.id === id);
}

const ranId = videosFullData[randomVideoId(videosFullData)].id;
class App extends Component {
  state = {
    nextVideosData: nextVideos,
    mainVideoFullData: videosFullData,
    videoId: ranId,
  };

  setVideoId = (id) => {
    this.setState(prevState=>({
      ...prevState,
      videoId: id,
    }));
  };

  render() {
    const video = getVideo(this.state.mainVideoFullData, this.state.videoId);
    const {
      comments,
      description,
      id,
      image,
      views,
      likes,
      title,
      channel,
      timestamp,
    } = video;

    const numberOfComments = comments.length;

    return (
      <div className="App">
        <Navbar />

        <Video videoId={id} image={image} />

        <div className="content__container">
          <div className="content__container--hac">
            {/*hac means hero, addcomment, comments */}

            <Hero
              videos={this.state.nextVideosData}
              setVideoId={this.setVideoId}
              videoId={id}
              description={description}
              channel={channel}
              views={views}
              likes={likes}
              title={title}
              timestamp={timestamp}
            />

            <AddComment numberOfComments={numberOfComments} />

            <Comments comments={comments} videoId={id} />
          </div>

          <div className="content__container--nv">
            {/*nv means newvideos */}

            <NextVideos
              nextVideos={this.state.nextVideosData}
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
