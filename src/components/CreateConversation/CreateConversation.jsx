import { useState } from "react"
import { getAuth  } from "firebase/auth";
import Axios from "axios"
import './createConversation.css'

const CreateGroup = () => {
    const auth = getAuth()
    const [groupName, setGroupName] = useState("")

    const handleOnChange = (e) => {
        setGroupName(e.target.value)
    }

    const handleOnClick = async (e) => {
        let jwt = auth.currentUser.accessToken
  
        const url = "https://tiktalk-server.codergirlsu.dev/groups/create"
        const data = {
            groupName: groupName
        }
        const res = await Axios.post(url, data, {headers: { 'Authorization': "Bearer " + jwt }})
        if (res.error != null) {
            console.log(res.error)
        }

        setGroupName("")
    }

    return (
        <div>
            <h3 className="groups-heading">Your Groups <span className="groups-bat">🦇</span></h3>
            <input placeholder="New Group Name..." className='chat-menu-create' value={groupName} onChange={handleOnChange}/>
            <button className="create-group-button" onClick={handleOnClick}>Create group</button>
        </div>
    )
}

export default CreateGroup