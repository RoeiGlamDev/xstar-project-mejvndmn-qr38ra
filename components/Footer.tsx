import React from 'react';
import './Footer.css'; // Assuming a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>CleanSSR</h2>
                <p>Your trusted cleaning partner.</p>
                <div className="reviews">
                    <h3>What our clients say:</h3>
                    <blockquote>
                        "CleanSSR transformed my home! Highly recommend!" - Jane D.
                    </blockquote>
                    <blockquote>
                        "Professional and thorough service!" - John S.
                    </blockquote>
                </div>
            </div>
            <div className="footer-links">
                <a href="#services">Services</a>
                <a href="#contact">Contact Us</a>
                <a href="#about">About Us</a>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;