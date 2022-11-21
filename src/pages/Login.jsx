import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from "react-router-dom";
import { clearAllIntervals } from "../utils/utils";

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async(e) => {
      e.preventDefault();
      let res = await login(email, password)
      if (!res.error) {
        navigate("/chat")
      }
    }

    useEffect(()=> {
      clearAllIntervals()
    })

  return (
    <div className="form-cont">
      <div className="form-wrap">
        <span className="brand">
          <Link to="/">TikTalk <span className="pumpkin">🎃</span></Link>
        </span>
        <span className="greeting">
          <p>Hail, friend! Did you bring your keys?</p>
        </span>
        <form  onSubmit={handleSubmit}>
          <input type="email" placeholder="email..." name="email"value={email || ''} required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password..." name="password" value={password || ''} required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onSubmit={handleSubmit} disabled={isLoading}>
            Sign Me In!
            </button>
            {error && <div className="error">{error}</div>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
