import React from 'react'
import Button from '../Button/Button';
import Video from '../Video/Video'
import publishIcon from '../../assets/icons/publish.svg'
import { Link } from 'react-router-dom';
import './Upload.scss'

const Upload = () => {
  return (
    <div className="upload">
      <h2 className='upload__heading'>Upload Video</h2>
      <div className="upload__info">
        <div className="upload__info--video">
          <p>VIDEO THUMBNAIL</p>
          <div className='thumbnail'>
            <img src="https://i.imgur.com/yFS8EBr.jpg" alt='thumbnail' />
          </div>
          
        </div>
        <div className="upload__info--input">
          <label>TITLE YOUR VIDEO</label>
          <input type="text" placeholder="Add a title to your video" />
          <label>ADD A VIDEO DESCRIPTION</label>
          <textarea cols='5' rows="4" placeholder="Add a description to your video" />
        </div>
      </div>
      <div className="upload__cta">
        <Button
          icon={publishIcon}
          className={["upload__button", "upload__button--icon", "upload__btn"]}
          alt={"publish"}
        />
        <Link to='/' className='upload__cta--cancel'>CANCEL</Link>
      </div>
    </div>
  );
}

export default Upload