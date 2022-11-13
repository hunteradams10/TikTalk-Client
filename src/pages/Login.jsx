import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/StateContext"

const Login = () => {

  let navigate = useNavigate()

    const initialFormState = {
      email: '',
      password: ''
    }

    const [formState, setFormState] = useState(initialFormState)

    const {dispatch} = useGlobalState();

    function handleChange(event){
      setFormState({
        ...formState,
        [event.target.name]: event.target.value
      })
    }

    function handleSubmit(event){
      event.preventDefault()

      login().then((data) => {

        let username = data.username;
        let token = data.token
        dispatch({type: 'setLoggedInUser', data: username});
        dispatch({type: 'setToken', data: token});
        navigate('/')
      }).catch((error) => console.log(error))
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
        <form>
          
          <input type="email" placeholder="email..." value={formState.username} onChange ={handleChange}/>
          <input type="password" placeholder="password..." value={formState.password} onChange ={handleChange}/>
          <button onClick={handleSubmit} type="submit">Log Me In!</button>
        </form>
        <p>
          Need an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
