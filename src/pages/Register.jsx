import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarUpload from "../img/avatarUpload.png"

const Register = () => {

    // setting state for submitting email, username and password to back-end API
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    // image verification, preview once uploaded
    const [image, setImage] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e){
        const file = e.target.files[0]
        if(file.size >= 1048576){
            return alert("Your image is too powerful! Max 1MB");
        } else{
            setImage(file);
            setImagePreview(URL.createObjectURL(file))
        }
    }

    async function uploadImage(){
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'defaultAvatarImage')
        try{
            setUploadingImage(true)
            let response = await fetch('https://api.cloudinary.com/v1_1/dubax843g/image/upload', {
                method: 'post',
                body: data

            })
            const urlData = await response.json();
            setUploadingImage(false);
            return urlData.url 
        } catch(error){
            setUploadingImage(false);
            console.log(error)
        }
    }
    // controls for alerts when avatar is not uploaded
    async function handleSignup(e) {
        e.preventDefault();
        if(!image) return alert("Heyyy you forgot to upload an avatar!");
        const url = await uploadImage(image)
        console.log(url);
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
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="username..." onChange={(e) => setUsername(e.target.value)}  value={username}/>
          <input type="email" placeholder="email..." onChange={(e) => setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder="password..." onChange={(e) => setPassword(e.target.value)} value={password}/>
          <input style={{display: "none"}} type="file" id="file" onChange={validateImg}/>
          <label htmlFor="file" id="file">
            <img src={imagePreview || avatarUpload} alt="" />
            <span>Upload an avatar!</span>
          </label>
          <button type="submit">
            {uploadingImage ? 'Getting you Registered!' : 'Sign me up!'}
            </button>
        </form>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
