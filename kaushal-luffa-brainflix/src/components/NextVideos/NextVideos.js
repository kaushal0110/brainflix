import React from "react";
// import videos from "../../data/videos.json";
import "./NextVideos.scss";

const  NextVideos =(props) => {
    const nextVideos = props.videoDetail.filter(
      (video) => video.id !== props.videoId
    );
    const {setVideoId} = props
    function handleClick(id) {
      setVideoId(id)
    }
    return (
      <div className="nextVideos">
        <p className="nextVideos__heading">NEXT VIDEOS</p>
        <div className="nextVideos__container">
          {nextVideos.map((video, idx) => {
            return (
              <div
                className="nextVideos__container--video"
                key={idx}
                onClick={() => handleClick(video.id)}
              >
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

export default NextVideos;
