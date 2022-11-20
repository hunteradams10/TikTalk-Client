import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function Navbar() {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="nav">
      <Link to="/">
        <h1>Tiktalk 🎃</h1>
      </Link>

      {user && (
        <ul>
          <li>
            <span className="username">{user.displayName}</span>
          </li>
          <li>
            <button className="button" onClick={handleClick}>
              Log Out
            </button>
          </li>
        </ul>
      )}
      {!user && (
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
