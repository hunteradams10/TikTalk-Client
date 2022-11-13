import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';

const Register = () => {

    const [data, setData] = useState({
      username: "",
      email: "",
      password: ""
    })
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
      setData({...data, [input.name]: input.value})
    }

    async function handleSubmit(e) {
      e.preventDefault();
      try{
        const url = "API URL FOR AUTH"
        const{data:response} = await Axios.post(url, data);
        localStorage.setItem("token", response.data);
        window.location = "/"
        console.log(response.message)
      } catch(error) {
        if(error.response && error.response.status >= 400 && error.response.status <= 500){
          setError(error.response.data.message)
          console.log({error})
        }
      }
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
        <form  onSubmit={handleSubmit}>
          <input type="email" placeholder="email..." name="email"value={data.email} required onChange={handleChange}/>
          <input type="password" placeholder="password..." name="password" value={data.password} required onChange={handleChange}/>
          <button type="submit" >
            Sign Me up!
            </button>
            {error && <div>{error}</div>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
