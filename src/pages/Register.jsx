import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { clearAllIntervals } from "../utils/utils";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async(e) => {
      e.preventDefault();

      await signup(username, email, password)
      navigate("/chat")
    }

    useEffect(()=> {
      clearAllIntervals()
    })

  return (
    <div className="form-cont">
      <div className="form-wrap">
        <span className="brand">
          <Link to="/login">TikTalk <span className="pumpkin">🎃</span></Link>
        </span>
        <span className="greeting">
          <p>Hail, friend! So you need some keys?</p>
        </span>
        <form  onSubmit={handleSubmit}>
          <input type="text" placeholder="username..." name="username" value={username || ""} required onChange={(e) => setUsername(e.target.value)}/>
          <input type="email" placeholder="email..." name="email"value={email || ""} required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password..." name="password" value={password || ''} required onChange={(e) => setPassword(e.target.value)}/>
          <input style={{display: "none"}} type="file" id="file"/>
          <button type="submit" disabled={isLoading} >
            Sign Me up!
            </button>
            {error && <div className="error">{error}</div>}
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
