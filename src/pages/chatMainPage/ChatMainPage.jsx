import { useEffect, useState } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/Message /Message'
import './chatMainPage.css'
import Axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateGroup from '../../components/CreateConversation/CreateConversation'
import AddToConversation from '../../components/AddToConversation/AddToConversation'
import { clearAllIntervals } from '../../utils/utils'

function ChatMainPage() {
  let nav = useNavigate()
  const auth = getAuth()
  const [history, setHistory] = useState([])
  const [conversations, setConversations] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [currentConversationId, setCurrentConversationId] = useState("")


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
  
        const url = "https://tiktalk-server.codergirlsu.dev/groups/history?groupId=" + currentConversationId
        const res = await Axios.get(url, {headers: { 'Authorization': "Bearer " + jwt }})
      
        setHistory(res.data)
        
        // get users groups
        const groupsUrl = "https://tiktalk-server.codergirlsu.dev/groups/"
        const groupsRes = await Axios.get(groupsUrl, {headers: { 'Authorization': "Bearer " + jwt }})
        if (groupsRes.error != null) {
          console.log(groupsRes.error)
        }
        setConversations(groupsRes.data)

        let chat = document.querySelector(".chat-box-top")
        chat.scrollTop = chat.scrollHeight

      } catch(error) {
        console.log({error})
      }
    }
    
    clearAllIntervals()
    setInterval(()=>{
      fetchData()
    },3000)
  },[currentConversationId, nav, auth])  


async function handleSend(event){
  event.preventDefault()
  setHistory((history)=>[...history, {_id:"0000", message: newMessage, senderId: auth.currentUser.uid, createdAt: new Date()}])

  let jwt = auth.currentUser.accessToken
  const url = "https://tiktalk-server.codergirlsu.dev/messages/"
  const data = {
    groupId: currentConversationId,
    message: newMessage
  }
  await Axios.post(url, data, {headers: { 'Authorization': "Bearer " + jwt }})
  setNewMessage("")
  let chat = document.querySelector(".chat-box-top")
  chat.scrollTop = chat.scrollHeight
 
}

function handleOnChange(event){
  setNewMessage(event.target.value)
}

async function handleLeaveGroup() {
  let jwt = auth.currentUser.accessToken
  const url = "https://tiktalk-server.codergirlsu.dev/groups/leave"
  const data = {
    groupId: currentConversationId,
  }
  await Axios.patch(url, data, {headers: { 'Authorization': "Bearer " + jwt }})
  setCurrentConversationId("")
}

  return (
    <>
    <div>
    <Navbar />
    </div>
      <div className="main-chat-wrapper">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
              <CreateGroup />
              { conversations.map((group) => {
                return (<Conversation group={group} key={group._id} groupChangeFunc={setCurrentConversationId} currentCoversationId={currentConversationId} />)
              })}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              { history.map((message)=>{
                return (<Message key={message._id} data={message}/>)
              })}
            </div>
            <AddToConversation currentConversationId={currentConversationId}/>
            <button onClick={handleLeaveGroup}>Leave group</button>
            <div className="chat-box-bottom">
              <textarea className="chat-message-input" placeholder="say something!" value={newMessage} onChange={handleOnChange}></textarea>
              <button className="chat-submit-button" onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default ChatMainPage