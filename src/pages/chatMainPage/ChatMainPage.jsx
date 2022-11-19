import { useEffect, useState } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/Message /Message'
import UserOnline from '../../components/userOnline/UserOnline'
import './chatMainPage.css'
import Axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";

function ChatMainPage() {
  let nav = useNavigate()
  let conversationId = "6373403e0146ddf60826ebe7" 
  const [history, setHistory] = useState([])

  function clearAllIntervals() {
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }

  const getUserData = () => {
    let userData = localStorage.getItem("user")
    let userObj = JSON.parse(userData)
    return userObj
  }

  useEffect(()=>{

    const fetchData = async () => {
      try{
        console.log("Refreshing messages")
        // setUserdata(localStorage.getItem("user"))
        let userData = getUserData() 
        if (userData == null) {
          clearAllIntervals()
          nav("/")
        }
  
        // let userObj = JSON.parse(userData)  // get user data and convert user string to object
        let jwt = userData.jwt
  
          const url = "https://tiktalk-server.codergirlsu.dev/groups/history?groupId=" + conversationId
          const res = await Axios.get(url, {headers: { 'Authorization': "Bearer " + jwt }})
          
          // checks to see if there was a token error
          // if so, redirect to the sign in page
          if (res.data.error != null && res.data.error === "invalid token") {
            clearAllIntervals()
            nav("/")
          }
          setHistory(res.data)
  
        } catch(error) {
          console.log({error})
      }
    }
    
    clearAllIntervals()
    setInterval(()=>{
      fetchData()
  },5000)
    
    fetchData()
},[conversationId, nav])  

  return (
    <>
    <div>
    <Navbar />
    </div>
      <div className="main-chat-wrapper">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
              <input placeholder="Search friends..." className='chat-menu-search' />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              {/* <Message /> */}
              { history.map((message)=>{
                return (<Message key={message._id} data={message} userdata={getUserData()}/>)
              })}
            </div>
            <div className="chat-box-bottom">
              <textarea className="chat-message-input" placeholder="say something!"></textarea>
              <button className="chat-submit-button">Send</button>
            </div>
          </div>
        </div>
        <div className="user-online">
          <div className="online-wrapper">
            <UserOnline />
            <UserOnline />
            <UserOnline />
            <UserOnline />
          </div>
        </div>
      </div>
      </>
  )
}

export default ChatMainPage