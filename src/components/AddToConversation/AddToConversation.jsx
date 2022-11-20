import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import Axios from "axios"

const AddToConversation = ({currentConversationId}) => {
    const auth = getAuth()
    const [email, setEmail] = useState()

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }

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

        setEmail("")
    }

    return (
        <div>
            <input type="text" onChange={handleOnChange} value={email} placeholder="Invite by email address ..." />
            <button onClick={handleOnClick}>Add</button>
        </div>
    )
}

export default AddToConversation