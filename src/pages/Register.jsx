import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
// import Axios from 'axios';

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
    // const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { signup, error, isLoading } = useSignup();

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

      await signup(username, email, password)
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
          <input type="text" placeholder="username..." name="username" value={username || ""} required onChange={(e) => setUsername(e.target.value)}/>
          <input type="email" placeholder="email..." name="email"value={email || ""} required onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password..." name="password" value={password || ''} required onChange={(e) => setPassword(e.target.value)}/>
          <input style={{display: "none"}} type="file" id="file"/>
          <label htmlFor="file" id="file">
            <img src="" alt="" />
            <span>Upload an avatar!</span>
          </label>
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
