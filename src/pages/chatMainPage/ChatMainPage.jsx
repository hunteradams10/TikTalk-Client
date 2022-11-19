import { useEffect, useState } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/Message /Message'
import './chatMainPage.css'
import Axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ChatMainPage() {
  let nav = useNavigate()
  let conversationId = "6373403e0146ddf60826ebe7" 
  const auth = getAuth()
  const [history, setHistory] = useState([])

  function clearAllIntervals() {
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user change")
        fetchData()
      }
    });

    const fetchData = async () => {
      try{
        console.log("Refreshing messages")
        if (!auth.currentUser) {
          console.log("no current user")
            clearAllIntervals()
            nav("/")  
        }
        let jwt = auth.currentUser.accessToken
  
          const url = "https://tiktalk-server.codergirlsu.dev/groups/history?groupId=" + conversationId
          const res = await Axios.get(url, {headers: { 'Authorization': "Bearer " + jwt }})
        
          setHistory(res.data)
  
        } catch(error) {
          console.log({error})
      }
    }
    
    clearAllIntervals()
    setInterval(()=>{
      fetchData()
  },3000)
},[conversationId, nav, auth])  

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
                return (<Message key={message._id} data={message}/>)
              })}
            </div>
            <div className="chat-box-bottom">
              <textarea className="chat-message-input" placeholder="say something!"></textarea>
              <button className="chat-submit-button">Send</button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default ChatMainPage