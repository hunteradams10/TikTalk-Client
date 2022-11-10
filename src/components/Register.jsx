import React from "react";
import { Link } from "react-router-dom";
import avatarUpload from "../img/avatarUpload.png"

const Register = () => {
  return (
    <div className="form-cont">
      <div className="form-wrap">
        <span className="brand">
          TikTalk <span className="pumpkin">🎃</span>
        </span>
        <span className="greeting">
          <p>Hail, friend! So you need some keys?</p>
        </span>
        <form>
          <input type="text" placeholder="username..." />
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <input style={{display: "none"}} type="file" id="file"/>
          <label htmlFor="file" id="file">
            <img src={avatarUpload} alt="" />
            <span>Upload an avatar!</span>
          </label>
          <button type="submit">Sign me up!</button>
        </form>
        <p>
          Already have an account? <Link to="./login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
