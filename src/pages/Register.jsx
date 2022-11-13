import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';

const Register = () => {

  // const [data, setData] = useState([])

    // setting state for submitting email, username and password to back-end API
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [username, setUsername] = useState('');

    // // image verification, preview once uploaded
    // const [image, setImage] = useState(null);
    // const [uploadingImage, setUploadingImage] = useState(false);
    // const [imagePreview, setImagePreview] = useState(null);

    // function validateImg(e){
    //     const file = e.target.files[0]
    //     if(file.size >= 1048576){
    //         return alert("Your image is too powerful! Max 1MB");
    //     } else{
    //         setImage(file);
    //         setImagePreview(URL.createObjectURL(file))
    //     }
    // }

    // async function uploadImage(){
    //     const data = new FormData();
    //     data.append('file', image);
    //     data.append('upload_preset', 'defaultAvatarImage')
    //     try{
    //         setUploadingImage(true)
    //         let response = await fetch('https://api.cloudinary.com/v1_1/dubax843g/image/upload', {
    //             method: 'post',
    //             body: data

    //         })
    //         const urlData = await response.json();
    //         setUploadingImage(false);
    //         return urlData.url 
    //     } catch(error){
    //         setUploadingImage(false);
    //         console.log(error)
    //     }
    // }
    // // logic for alerts when avatar is not uploaded
    // async function handleSignup(e) {
    //     e.preventDefault();
    //     if(!image) return alert("Heyyy you forgot to upload an avatar!");
    //     const url = await uploadImage(image)
    //     console.log(url);
    // }

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

    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const url = "API URL FOR USERS"
        const{data:response} = await Axios.post(url, data);
        navigate("/")
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
          <input type="text" placeholder="username..." name="username" value={data.username} required onChange={handleChange}/>
          <input type="email" placeholder="email..." name="email"value={data.email} required onChange={handleChange}/>
          <input type="password" placeholder="password..." name="password" value={data.password} required onChange={handleChange}/>
          <input style={{display: "none"}} type="file" id="file"/>
          <label htmlFor="file" id="file">
            <img src="" alt="" />
            <span>Upload an avatar!</span>
          </label>
          <button type="submit" >
            Sign Me up!
            </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
