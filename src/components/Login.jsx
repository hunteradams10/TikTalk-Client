import React from "react";

const Login = () => {
  return (
    <div className="form-cont">
      <div className="form-wrap">
        <span className="brand">
          TikTalk <span className="pumpkin">🎃</span>
        </span>
        <span className="greeting">
          <p>Hail, friend! Did you bring your keys?</p>
        </span>
        <form>
          <input type="email" placeholder="email..." />
          <input type="password" placeholder="password..." />
          <button type="submit">Log me in!</button>
        </form>
        <p>
          Need an account? <a href="./register">Register!</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
