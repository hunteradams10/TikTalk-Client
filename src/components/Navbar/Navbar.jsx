import React from "react";
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
        <nav>
          {user && (
            <div>
              <span>{user.displayName}</span>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
