import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <button type="submit">Log Me In!</button>
        </form>
        <p>
          Need an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
