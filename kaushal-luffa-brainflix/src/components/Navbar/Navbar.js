import React from "react";
import logo from "../../BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import userImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import "./Navbar.scss";


const  Navbar =(props) => {
    return (
      <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-input-img">
        <div className="navbar__input">
          <img
            src={searchIcon}
            alt="search icon"
            className="navbar__input-searchIcon"
            />
          <input placeholder="Search" className="navbar__input-box" />
        </div>
        <div className="navbar__userImg">
          <img src={userImg} alt="userImg" />
        </div>
      </div>
      <div className="navbar__button">
        <div className="navbar__button--icon">
          <img src={uploadIcon} alt="upload" />
        </div>
        <button className="navbar__btn">UPLOAD</button>
      </div>
    </div>
  );

};

export default Navbar;
