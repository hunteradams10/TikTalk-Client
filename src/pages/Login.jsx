import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();

    }

  return (
    <div className="form-cont">
      <div className="form-wrap">
        <span className="brand">
          <Link to="/login">TikTalk <span className="pumpkin">🎃</span></Link>
        </span>
        <span className="greeting">
          <p>Hail, friend! So you need some keys?</p>
        </span>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="email..." onChange={(e) => setEmail(e.target.value)} value={email} required />
          <input type="password" placeholder="password..." onChange={(e) => setPassword(e.target.value)} value={password} required />
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
