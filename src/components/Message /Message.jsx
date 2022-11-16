import './message.css'

import React from 'react'

function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="message-top">
            <img className="message-image" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg&_gl=1*nmfcye*_ga*NzgwNjU2MzM1LjE2NjgxNTI0MzY.*_ga_8JE65Q40S6*MTY2ODMzMDAzMy41LjEuMTY2ODMzMjIzMy4wLjAuMA.." alt="" />
            <p className="message-text">A message from me to you</p>
        </div>
        <div className="message-bottom">
            1 hour ago
        </div>
        
    </div>
  )
}

export default Message