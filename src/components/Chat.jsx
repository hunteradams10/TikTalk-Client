import SideBar from "./SideBar.jsx";
import Message from "./Message.jsx";
import LoginBar from "./LoginBar.jsx";

function Chat() {
  return (
    <div className="chat">
      <LoginBar/>
      <SideBar /> 
    <Message />
    </div>
  );
}

export default Chat;
