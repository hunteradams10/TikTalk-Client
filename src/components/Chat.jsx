import SideBar from "./SideBar.jsx";
import Message from "./Message.jsx";
import LoginBar from "./LoginBar.jsx";
import { useEffect, useState } from 'react';

function Chat() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div className="chat">
      <LoginBar/>
      <SideBar /> 
    <Message />
    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}
    </div>
  );
}

export default Chat;
