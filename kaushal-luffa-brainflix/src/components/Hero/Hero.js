import React, { Component } from "react";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./Hero.scss";

class Hero extends Component {
  state = {
    videoDetail: this.props.videos.find(
      (video) => video.id === this.props.videoId
    ),
  };
  componentDidMount(){
    this.props.setVideoId(this.state.videoDetail.id)
  }
  render() {
    const {title, description,views,likes,channel} = this.state.videoDetail
    
    return (
      <div className="hero">
        <div className="hero__heading">
          <h1 className="hero__heading--title">{title}</h1>
        </div>
        <div className="hero__info">
          <div className="hero__info--channel-date">
            <h3 className="channel">{`By ${channel}`}</h3>
            <p className="date">07/11/2021</p>
          </div>
          <div className="hero__info--likes-views">
            <p className="views">
              <span className="views-icon">
                <img src={viewsIcon} alt="views icon" />
              </span>
              {views}
            </p>
            <p className="likes">
              <span className="likes-icon">
                <img src={likesIcon} alt="likes icon" />
              </span>
              {likes}
            </p>
          </div>
        </div>
        <div className="hero__description">
          <p className="hero__description--text">
            {description}
          </p>
        </div>
      </div>
    );
  }
};

export default Hero;
