import React from "react";
import './navbar.css'
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
    <header>
      <div className="nav-container">
      <Link to="/">
            <h1>Tiktalk 🎃</h1>
        </Link>
        <div className="nav">
        
          {user && (
            <div>
              <span className="username">{user.displayName}</span>
              <button className="button" onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
