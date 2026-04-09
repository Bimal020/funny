import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" style={{ justifyContent: 'center' }}>
            <Link to="/" className="logo fun-wiggle" style={{ position: 'absolute', left: '5%' }}>JUST FUN</Link>
            <div className="nav-links">
                <Link to="/" className="fun-bounce">Home</Link>
                <Link to="/services" className="fun-bounce">Services</Link>
                <Link to="/gallery" className="fun-bounce">Gallery</Link>
                <Link to="/about" className="fun-bounce">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
