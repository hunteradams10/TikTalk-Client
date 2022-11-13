import React from 'react'
import './conversation.css'

function Conversation() {
  return (
    <div className='conversation'>
        <img className='conversation-image' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*1ynru66*_ga*NzgwNjU2MzM1LjE2NjgxNTI0MzY.*_ga_8JE65Q40S6*MTY2ODMzMDAzMy41LjEuMTY2ODMzMDcwNi4wLjAuMA.." alt="" />
        <span className='conversation-name'>John Doe</span>
    </div>
  )
}

export default Conversation