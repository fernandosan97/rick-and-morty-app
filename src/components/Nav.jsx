import React from 'react';
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <header>
            <nav className="nav">
                <div className="container__nav">
                    <img src={logo} alt="Logo" />
                    <div className="nav__links">
                        <a href="">Characters</a>
                        <a href="">Episodes</a>
                        <a href="">Episodes</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;