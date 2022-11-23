// imports to be used on this page
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth"

// getting authorisation for the purposes of what to display on the navbar. Also importing useLogout hook for logout button. When the logout button is clicked, it calls the useLogout hook and destroys the access token, then navigates back to the login page.
function Navbar() {
  const auth = getAuth()

  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleClick = async () => {
    await logout();
    navigate("/");
  }; 

  // logic for making the navbar stick to the top of the page. 
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  // the "sticky" state (boolean) is implemented to keep the navbar sticky.

  // if a user is not logged in, it should automatically redirect to logout. A lot of this is to give the user options in the event that it fails, which it won't. If the user is logged in, only the logout button will display. If they're not logged in and have somehow made it to the chats page (only place where the navbar is displayed), they'll be shown options to login or sign up in the navbar. Again, that should not ever be seen, but is there as a safety.
  return (
    <nav className={`nav ${sticky ? "sticky" : ""}`}>
      <Link to="/">
        <h1>Tiktalk 🎃</h1>
      </Link>

      {auth.currentUser && (
        <ul>
          <li>
            <span className="username">{auth.currentUser.name}</span>
          </li>
          <li>
            <button className="button" onClick={handleClick}>
              Log Out
            </button>
          </li>
        </ul>
      )}
      {!auth.currentUser && (
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
