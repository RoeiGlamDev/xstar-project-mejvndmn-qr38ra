import React from 'react';
import './Header.css'; // Importing CSS for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>CleanSSR</h1> {/* Company name */}
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="cta">
                <button className="quote-button">Get a Quote</button> {/* Call to action */}
            </div>
        </header>
    );
};

export default Header;