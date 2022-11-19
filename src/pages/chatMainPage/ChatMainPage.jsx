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


async function fetchData(){
    try{
      let userData = localStorage.getItem("user")
      if (userData == null) {
        nav("/")
      }

      let userObj = JSON.parse(userData)  // get user data and convert user string to object
      let jwt = userObj.jwt

        const url = "https://tiktalk-server.codergirlsu.dev/groups/history?groupId=" + conversationId
        const res = await Axios.get(url, {headers: { 'Authorization': "Bearer " + jwt }})
        console.log(">>>>" + JSON.stringify(res.data))
        setHistory(res.data)

      } catch(error) {
        //setError(error.response.data.message)
        console.log({error})
    }
  }
  useEffect(()=>{
    setInterval(()=>{
      fetchData()
  },5000)
    fetchData()
    // eslint-disable-next-line
},[])  

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
                return (<Message data={message}/>)
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