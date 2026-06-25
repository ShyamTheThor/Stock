import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff", padding: "12px 0" }}>
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src='media/images/logo.svg' style={{ width: '120px' }} alt="Logo" />
                </Link>

                {/* Hamburger for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* Nav links — pushed to right with ms-auto */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={navLinkStyle}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product" style={navLinkStyle}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing" style={navLinkStyle}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support" style={navLinkStyle}>Support</Link>
                        </li>

                        {/* Divider */}
                        <li className="nav-item mx-2" style={{ borderLeft: '1px solid #ddd', height: '22px', alignSelf: 'center' }}></li>

                        {/* Auth section */}
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <span style={userGreetStyle}>👋 {userName}</span>
                                </li>
                                <li className="nav-item ms-2">
                                    <button onClick={handleLogout} style={logoutBtnStyle}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item ms-2">
                                    <Link to="/login" style={loginBtnStyle}>Login</Link>
                                </li>
                                <li className="nav-item ms-2">
                                    <Link to="/signup" style={signupBtnStyle}>Sign up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const navLinkStyle = {
    color: '#444',
    fontSize: '14px',
    fontWeight: '500',
    padding: '6px 14px',
    textDecoration: 'none',
    transition: 'color 0.2s',
};

const loginBtnStyle = {
    display: 'inline-block',
    padding: '7px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#387ed1',
    border: '1.5px solid #387ed1',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    backgroundColor: 'transparent',
};

const signupBtnStyle = {
    display: 'inline-block',
    padding: '7px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: '#387ed1',
    border: '1.5px solid #387ed1',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'all 0.2s',
};

const logoutBtnStyle = {
    padding: '7px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#444',
    backgroundColor: 'transparent',
    border: '1.5px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s',
};

const userGreetStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    padding: '6px 10px',
};

export default Navbar;