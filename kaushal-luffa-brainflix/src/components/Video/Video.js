import React from "react";
import "./Video.scss";

const  Video =(props) => {
    return (
      <div className="video__container">
      <video
        poster={props.image || 'http://localhost:8080/images/image1.jpeg'}
        controls={props.controls}
        >
        {/* <source src={videoDetails[0].video} type="video/mp4" /> */}
      </video>
    </div>
  );

};

export default Video;
