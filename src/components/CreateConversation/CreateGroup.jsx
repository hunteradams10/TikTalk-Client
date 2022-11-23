// imports to be used on this page
import { useState } from "react"
import { getAuth  } from "firebase/auth";
import Axios from "axios"
import './createGroup.css'

// the auth is set, as well as a state for the group name to maintain it. An event handler is implemented to be used with state. When the user clicks "create group", their token is checked, and a post request is sent to the API. If the auth is correct, the new group is returned and the "create group" field is set to an empty string. 

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
    // the functions above are implemented in the return statement on their respective field and button.
    return (
        <div>
            <h3 className="groups-heading">Your Groups <span className="groups-bat">🦇</span></h3>
            <input placeholder="New Group Name..." className='chat-menu-create' value={groupName} onChange={handleOnChange}/>
            <button className="create-group-button" onClick={handleOnClick}>Create group</button>
        </div>
    )
}

export default CreateGroup