import React, { useState } from "react";
import Button from "../Button/Button";
import publishIcon from "../../assets/icons/publish.svg";
import { Link, Route, useHistory } from "react-router-dom";
import "./Upload.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const history = useHistory()
  const handleClick = () => {
    const id = uuidv4()
    const singleVideoData = {
      id,
      title,
      channel: "By You",
      image: "https://i.imgur.com/l2Xfgpl.jpg",
    };
    const fullVideoData = {
      title,
      channel: "You",
      image: "http://localhost:8080/images/image1.jpeg",
      description,
      views: "0",
      likes: "0",
      duration: "4:20",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: moment.now(),
      comments: [],
      id,
    };
    axios({
      method: "post",
      url: "http://localhost:8080/videos",
      data: singleVideoData,
    });
    axios({
      method: "post",
      url: "http://localhost:8080/videos-details",
      data: fullVideoData,
    });
    setTitle('')
    setDescription('')
    history.push('/')
  };
  return (
    <>
      <Route>
        <div className="upload">
          <h2 className="upload__heading">Upload Video</h2>
          <div className="upload__info">
            <div className="upload__info--video">
              <p>VIDEO THUMBNAIL</p>
              <div className="thumbnail">
                <img src="https://i.imgur.com/yFS8EBr.jpg" alt="thumbnail" />
              </div>
            </div>
            <div className="upload__info--input">
              <label>TITLE OF YOUR VIDEO</label>
              <input
                type="text"
                placeholder="Add a title to your video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea
                cols="5"
                rows="4"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="upload__cta">
            <Button
              icon={publishIcon}
              className={[
                "upload__button",
                "upload__button--icon",
                "upload__btn",
              ]}
              alt="publish"
              // alt={isUploading ? "uploading" : "publish"}
              handleClick={handleClick}
            />
            <Link to="/" className="upload__cta--cancel">
              CANCEL
            </Link>
          </div>
        </div>
      </Route>
    </>
  );
};

export default Upload;
