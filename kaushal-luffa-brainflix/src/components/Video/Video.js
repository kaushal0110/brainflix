import React, { Component } from "react";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import "./Video.scss";

class  Video extends Component {
  render(){

    return (
      <div className="video__container">
      <video
        style={{
          background: `transparent url("${videos[0].image}") 50% 50% / cover no-repeat`,
          width: "100%",
        }}
        controls
        poster="data:image/gif;base64"
        >
        <source src={videoDetails[0].video} type="video/mp4" />
      </video>
    </div>
  );
}
};

export default Video;
