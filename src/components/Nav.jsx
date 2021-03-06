import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <nav className="nav">
                <div className="container__nav">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="nav__links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;