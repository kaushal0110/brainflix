import React, { Component } from 'react'
import commentIcon from '../../assets/icons/add_comment.svg'
import userImg from '../../assets/images/Mohan-muruge.jpg'

import './AddComment.scss'

class AddComment extends Component {
  render(){

    return (
      <div className="addComment">
      <h4 className="addComment__heading">{`${this.props.numberOfComments} Comments`}</h4>
      <div className="addComment__container">
        <div className="addComment__container--img">
          <img src={userImg} alt='userImage'/>
        </div>
        <div className="addComment__container--input">
          <p>JOIN THE CONVERSATION</p>
          <input type="text" placeholder="Add a new comment" />
          <div className="addComment__container--button">
            <div className="addComment__container--button-icon">
              <img src={commentIcon} alt="comment" />
            </div>
            <button className="addComment__container-btn">COMMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default AddComment