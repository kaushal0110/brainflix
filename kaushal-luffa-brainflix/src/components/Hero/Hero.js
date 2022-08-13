import React from "react";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./Hero.scss";


const  Hero =(props) => {
    return (
      <div className="hero" id={props.videoId}>
        <div className="hero__heading">
          <h1 className="hero__heading--title">{props.title}</h1>
        </div>
        <div className="hero__info">
          <div className="hero__info--channel-date">
            <h3 className="channel">{`By ${props.channel}`}</h3>
            <p className="date">07/11/2021</p>
          </div>
          <div className="hero__info--likes-views">
            <p className="views">
              <span className="views-icon">
                <img src={viewsIcon} alt="views icon" />
              </span>
              {props.views}
            </p>
            <p className="likes">
              <span className="likes-icon">
                <img src={likesIcon} alt="likes icon" />
              </span>
              {props.likes}
            </p>
          </div>
        </div>
        <div className="hero__description">
          <p className="hero__description--text">
            {props.description}
          </p>
        </div>
      </div>
    );
  
};

export default Hero;
