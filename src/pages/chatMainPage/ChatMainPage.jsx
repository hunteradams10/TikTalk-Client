import { useEffect, useState } from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/Message /Message'
import UserOnline from '../../components/userOnline/UserOnline'
import './chatMainPage.css'
import Axios from "axios"

import { useNavigate } from "react-router-dom";


// add the jwt to the header 
// use the Axios to set the header

function ChatMainPage() {
  let conversationId = "6373403e0146ddf60826ebe7"
  let jwt = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4MDljZmYxMTZlNWJhNzQwNzQ1YmZlZGE1OGUxNmU4MmYzZmQ4MDUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFkYWRhIiwicmVndWxhclVzZXIiOnRydWUsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aWstdGFsay1kYzAxOCIsImF1ZCI6InRpay10YWxrLWRjMDE4IiwiYXV0aF90aW1lIjoxNjY4NzcyOTQ3LCJ1c2VyX2lkIjoicVplOUEwQzBLQ1BudEwwZVoyOUtUS2thb0tIMiIsInN1YiI6InFaZTlBMEMwS0NQbnRMMGVaMjlLVEtrYW9LSDIiLCJpYXQiOjE2Njg3NzI5NDcsImV4cCI6MTY2ODc3NjU0NywiZW1haWwiOiJ0ZXN0MTNAdGVzdDEzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QxM0B0ZXN0MTMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.rW9Qmo82RQLY4d6279teCadkdmbbGCdwi1SG7uoDN9eGDKNwmgZQPVzZ0Ze_V7o7lmDpXotJDWAolxIJVndtjwZbPOqlOv4liL_jOFgKeRmf34vqaQCFuFDHqmDwDsYJ--CJT_nbvbUcYuvF6IzXXgPs2YOvLbUuBiULCM2p9OpdrlGMGhZouFIDYMcmJxZskgyyv-NBCLXO93kNGJTmKwUB0BqKOxFf8LMwV5if_7MuQJL4e_U0F7fUWcBHOfAwj9bdz_zM_VmUXV8Nat5CRVYzYROApNsvQuF8p-0mlx9C9ZZL4FhQAOiqB-RN2mXe8BF8BMnB6Gpgm7LTeTr88Q"
 

  const [history, setHistory] = useState([])


async function fetchData(){
    try{
        const url = "https://tiktalk-server.codergirlsu.dev/groups/history?groupId=" + conversationId
        const res = await Axios.get(url, {headers: { 'Authorization': "Bearer" + " " + jwt }})
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
  )
}

export default ChatMainPage