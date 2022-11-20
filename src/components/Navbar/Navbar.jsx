import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth"

function Navbar() {
  const auth = getAuth()

  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleClick = async () => {
    await logout();
    navigate("/");
  };

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
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
