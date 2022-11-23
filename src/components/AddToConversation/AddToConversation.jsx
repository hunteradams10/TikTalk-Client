// imports for use on this page
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import Axios from "axios"
import './addToConversation.css'

const AddToConversation = ({currentConversationId}) => {
    //retrieving the auth from firebase, and using state to maintain the email input.
    const auth = getAuth()
    const [email, setEmail] = useState()
    // an event handler working with state to maintain email input.
    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }
    // an async function to handle when "add" button is clicked. The group id as well as the email is sent to the back end. The back-end is then updated with a patch request and checks the headers. If there is an error, it is logged. If not, an alert appears saying that the user has been added, and the email field is set to an empty string again.
    const handleOnClick = async (e) => {
        let jwt = auth.currentUser.accessToken
  
        const url = "https://tiktalk-server.codergirlsu.dev/groups/add"
        const data = {
            groupId: currentConversationId,
            email: email
        }
        const res = await Axios.patch(url, data, {headers: { 'Authorization': "Bearer " + jwt }})
        if (res.error != null) {
            console.log(res.error)
        }
        alert("user added to group!")
        setEmail("")
    }

    return (
        <div>
            {/* event handlers defined above to handle changes on the page */}
            <input className="invite-to-convo-input" type="text" onChange={handleOnChange} value={email} placeholder="Invite by email..." />
            <button className='add-button' onClick={handleOnClick}>Add</button>
        </div>
    )
}

export default AddToConversation