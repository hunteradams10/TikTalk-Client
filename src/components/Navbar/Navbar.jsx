import React from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()

    const {logout} = useLogout()

    const handleClick = () => {
        logout()
        navigate("/")
    }
  return (
    <header>
        <div className="nav-container">
            <Link to="/">
                <h1>Tiktalk 🎃</h1>
            </Link>
            <nav>
                <div>
                    <button onClick={handleClick}>Log Out</button>
                </div>
                <div>
                    <Link to="/">Login</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar