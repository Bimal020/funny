import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Link to="/" className="logo fun-wiggle" style={{ marginBottom: '1.5rem', textDecoration: 'none', display: 'inline-block', fontSize: '2.5rem' }}>JUST FUN</Link>
                <p style={{ margin: '0 auto 1.5rem', fontSize: '1.2rem', fontWeight: '500' }}>
                    Spreading digital joy one pixel at a time. Just Fun!
                </p>
                <p style={{ marginBottom: '2rem', color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'var(--font-fun)' }}>
                    CREATED BY L2C2 STUDENTS
                </p>
                <div className="nav-links" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
                    <Link to="/" className="fun-bounce">Home</Link>
                    <Link to="/services" className="fun-bounce">Services</Link>
                    <Link to="/gallery" className="fun-bounce">Gallery</Link>
                    <Link to="/about" className="fun-bounce">About</Link>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>
                    © 2024 <span style={{ color: 'var(--primary)' }}>JUST FUN</span> Digital Playground. No boring stuff allowed.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
