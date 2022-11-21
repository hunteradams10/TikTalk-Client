import React from 'react'
import './conversation.css'

function Conversation({group, groupChangeFunc, currentCoversationId}) {
  const handleOnClick = (id) => {
    groupChangeFunc(id)
  }

  return (
    <div className={ group._id === currentCoversationId ? 'conversation active' : 'conversation'} onClick={() => {handleOnClick(group._id)}}>
        <p className='conversation-image'>🎃</p>
        <span className='conversation-name'>{group.groupName}</span>
    </div>
  )
}

export default Conversation