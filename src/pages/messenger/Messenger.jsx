import React from 'react'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/Message /Message'
import UserOnline from '../../components/userOnline/UserOnline'
import './messenger.css'

function Messenger() {
  return (
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
              <input placeholder="Search for chats..." className='chat-menu-input' />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own={true}/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
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

export default Messenger