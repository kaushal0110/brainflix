import React, { Component } from 'react'
import cimg from '../../assets/images/Mohan-muruge.jpg'
import './Comment.scss'

class Comments extends Component {
  state = {
    videoComments: this.props.videos.find(
      (video) => video.id === this.props.videoId
    ),
  };
  render() {
    const comments = this.state.videoComments.comments
    return (
      <div className="comments__container">
        {comments.map((comnt, idx) => {
          return (
            <div className="comment" key={idx}>
              <div className="comment__profile-pic">
                <img
                  className="comment__profile-pic--pic"
                  src={cimg}
                  alt="usrimg"
                />
              </div>
              <div className="comment__content">
                <div className="comment__content-name-date">
                  <p className="user-name">{comnt.name}</p>
                  <p className="comment-date">08/09/2021</p>
                </div>
                <div className="comment__content--comment">{comnt.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments