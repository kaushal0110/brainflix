import React, { Component } from "react";
// import videos from "../../data/videos.json";
import "./NextVideos.scss";

class NextVideos extends Component {
  state = {
    nextVideos: this.props.videoDetail.filter(
      (video) => video.id !== this.props.videoId
    ),
  };
  render() {
    return (
      <div className="nextVideos">
        <p className="nextVideos__heading">NEXT VIDEOS</p>
        <div className="nextVideos__container">
          {this.state.nextVideos.map((video, idx) => {
            return (
              <div className="nextVideos__container--video" key={idx}>
                <div className="thumbnail">
                  <img
                    className="thumbnail-img"
                    src={video.image}
                    alt="thumbnail"
                  />
                </div>
                <div className="info">
                  <h6>{video.title}</h6>
                  <p>{video.channel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default NextVideos;
