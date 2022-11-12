
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authServices";
import { useGlobalState } from "../utils/StateContext";

export default function LoginBar() {
  let navigate = useNavigate();
  const {store, dispatch} = useGlobalState();
  const {loggedInUser} = store;

  function handleLogout(event) {
    event.preventDefault();
    logout().then(() => {
        dispatch({type: "setLoggedInUser", data: null});
        dispatch({type: "setToken", data: null});

    })
  }

  return (
    <div>
      {loggedInUser ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </>
      )}
    </div>
  );
}