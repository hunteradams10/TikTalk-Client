import { useState } from "react";
import { Link } from "react-router-dom";
// import Axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async(e) => {
      e.preventDefault();
      // try{
      //   const url = "https://tiktalk-server.codergirlsu.dev/users/sign-up"
      //   const res = await Axios.post(url, data).then(navigate("/chat"))
      //   console.log(res)
      // } catch(error) {
      //     setError(error.response.data.message)
      //     console.log({error})
      //   }

      console.log(email, password)
    }

  return (
    <div className="form-cont">
      <div className="form-wrap">
        <span className="brand">
          <Link to="/login">TikTalk <span className="pumpkin">🎃</span></Link>
        </span>
        <span className="greeting">
          <p>Hail, friend! Did you bring your keys?</p>
        </span>
        <form  onSubmit={handleSubmit}>
          <input type="email" placeholder="email..." name="email"value={email || ''} required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password..." name="password" value={password || ''} required onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" onSubmit={handleSubmit} >
            Sign Me In!
            </button>
        </form>
        <p>
          Don't have an account? <Link to="/">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
