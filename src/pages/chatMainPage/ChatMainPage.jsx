// imports for use on this page
import { useEffect, useState } from "react";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/Message /Message";
import "./chatMainPage.css";
import Axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateGroup from "../../components/CreateConversation/CreateGroup";
import AddToConversation from "../../components/AddToConversation/AddToConversation";
import { clearAllIntervals } from "../../utils/utils";

function ChatMainPage() {
  // importing getAuth to be used across app; as well as useNavigate for redirecting and setting states for message history, conversations bar on left, the messages themselves, and the selected id for those conversations.
  let nav = useNavigate();
  const auth = getAuth();
  const [history, setHistory] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentConversationId, setCurrentConversationId] = useState("");

  // a useEffect hook for when the authState changes. It will look for whether the user changes when the page refreshes, and will fetch that data using the async fetchData function and log the change to the console.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user change");
        fetchData();
      }
    });

    // an async function for fetching the data. It will initially log a message to the console to say that it is refreshing the message history. If there is no user logged in, it will stop fetching the message history (clearAllIntervals) and redirect the user (nav("/")) back to the login page, which is the root. If there is a user, it will use that user's access token for auth. It will then use the current conversation id for that user.
    const fetchData = async () => {
      try {
        console.log("Refreshing messages");
        if (!auth.currentUser) {
          console.log("no current user");
          clearAllIntervals();
          nav("/");
        }
        let jwt = auth.currentUser.accessToken;

        // using an async function to get the message history specific to the group id the user has selected with the correct authorization headers and the tokens for the users in the group. The response from the API is assigned to the setHistory state.
        const url =
          "https://tiktalk-server.codergirlsu.dev/groups/history?groupId=" +
          currentConversationId;
        const res = await Axios.get(url, {
          headers: { Authorization: "Bearer " + jwt },
        });

        setHistory(res.data);

        // Another async function to get user groups. It will send the request with the assigned headers and the jwt token. If there is an error, it will be logged to the console. If not, the conversations state is set to the response from the API.
        const groupsUrl = "https://tiktalk-server.codergirlsu.dev/groups/";
        const groupsRes = await Axios.get(groupsUrl, {
          headers: { Authorization: "Bearer " + jwt },
        });
        if (groupsRes.error != null) {
          console.log(groupsRes.error);
        }
        setConversations(groupsRes.data);

        // then the querySelector will be used to keep scrolling to the bottom of the page when there is a new message, and log an error if something goes wrong.
        let chat = document.querySelector(".chat-box-top");
        chat.scrollTop = chat.scrollHeight;
      } catch (error) {
        console.log({ error });
      }
    };
    // this will clear all the previous intervals, and create a new one to fetch the messages data from the API every three seconds. When the items in the square brackets change, the useEffect hook defined above will be executed.
    clearAllIntervals();
    setInterval(() => {
      fetchData();
    }, 3000);
  }, [currentConversationId, nav, auth]);

  // an async function to handle when the 'send' button is clicked. It prevents the default refreshing of the page, and the message is added to the message history using the SetHistory state. The body is sent through as an object. All the relevant information is sent as an object, with the message id waiting to be reassigned by the back-end.
  async function handleSend(event) {
    event.preventDefault();
    setHistory((history) => [
      ...history,
      {
        _id: "0000",
        message: newMessage,
        senderId: auth.currentUser.uid,
        createdAt: new Date(),
      },
    ]);
    // it will then use the current token to save the new message to the database using a post request with the correct headers, and await that response. While doing that, it will set the message body to be an empty string to prepare for another message, and scroll to the bottom of the chat box with the querySelector function.
    let jwt = auth.currentUser.accessToken;
    const url = "https://tiktalk-server.codergirlsu.dev/messages/";
    const data = {
      groupId: currentConversationId,
      message: newMessage,
    };
    await Axios.post(url, data, {
      headers: { Authorization: "Bearer " + jwt },
    });
    setNewMessage("");
    let chat = document.querySelector(".chat-box-top");
    chat.scrollTop = chat.scrollHeight;
  }

  // keeping the state stable for entering new messages. The value of the the message is set to what the user is typing as they are typing it.
  function handleOnChange(event) {
    setNewMessage(event.target.value);
  }

  // an async function for when the user leaves the group. It will authorize the user using their token, and fetch the conversation id from the API. It then uses a patch request to modify that data with the correct headers, and uses state to set the conversation ID to an empty string.
  async function handleLeaveGroup() {
    let jwt = auth.currentUser.accessToken;
    const url = "https://tiktalk-server.codergirlsu.dev/groups/leave";
    const data = {
      groupId: currentConversationId,
    };
    await Axios.patch(url, data, {
      headers: { Authorization: "Bearer " + jwt },
    });
    setCurrentConversationId("");
  }
  // this is what is shown on the page. classNames are for styling.
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-chat-wrapper">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            {/* the createGroup component is called, and the conversations are mapped by group */}
            <CreateGroup />
            {conversations.map((group) => {
              return (
                <Conversation
                  group={group}
                  key={group._id}
                  groupChangeFunc={setCurrentConversationId}
                  currentCoversationId={currentConversationId}
                />
              );
            })}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              {/* the chat history is mapped by message, with the correct id being used */}
              {history.map((message) => {
                return <Message key={message._id} data={message} />;
              })}
            </div>
            <div className="add-and-leave-group">
              {/* AddToConversation component is called, with the correct conversation id */}
              <AddToConversation
                currentConversationId={currentConversationId}
              />
              {/* an event handler defined above to leave the group when the button is clicked */}
              <button className="leave-group-button" onClick={handleLeaveGroup}>
                Leave Group
              </button>
            </div>
            <div className="chat-box-bottom">
              {/* the state is used to keep track of user input, and an event handler defined above to handle changes */}
              <textarea
                className="chat-message-input"
                placeholder="say something!"
                value={newMessage}
                onChange={handleOnChange}
              ></textarea>
              {/* an event handler defined above, to handle when the 'send' button is clicked */}
              <button className="chat-submit-button" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMainPage;
