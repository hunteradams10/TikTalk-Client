import './message.css'
// imports for this page
import { getAuth } from "firebase/auth";
import React from 'react'

// the auth is checked and the sender IDs are compared for CSS purposes. If the message is from the logged in user, it appears on the right. If not, it appears on the left. The senders name is returned next to the message body, along with their message. "moment" is used here to show the correct date and time.
function Message({data}) {
  const auth = getAuth()

  return (
    <div className= {data.senderId === auth.currentUser.uid ? "message own" : "message"}>
        <div className="message-top">
          <div className="sender-name">
            {data.senderName}
            </div>
            <p className="message-text">{data.message}</p>
        </div>
        <div className="message-bottom">
        {new Date(data.createdAt).toLocaleString()}
        </div>
        
    </div>
  )
}

export default Message