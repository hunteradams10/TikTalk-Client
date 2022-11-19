import './message.css'

import React from 'react'

function Message({data}) {
  return (
    <div className="message">
      {/* {own ? "message own" : "message"}> */}
        <div className="message-top">
            <img className="message-image" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg&_gl=1*nmfcye*_ga*NzgwNjU2MzM1LjE2NjgxNTI0MzY.*_ga_8JE65Q40S6*MTY2ODMzMDAzMy41LjEuMTY2ODMzMjIzMy4wLjAuMA.." alt="" />
            <p className="message-text">{data.message}</p>
        </div>
        <div className="message-bottom">
        {new Date(data.createdAt).toLocaleString()}
        </div>
        
    </div>
  )
}

export default Message