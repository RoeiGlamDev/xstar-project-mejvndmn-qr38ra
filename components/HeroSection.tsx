import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to CleanSSR</h1>
                <p className="hero-subtitle">Your trusted cleaning service</p>
                <button className="hero-button">Get a Free Quote</button>
            </div>
            <div className="hero-reviews">
                <h2>What Our Clients Say</h2>
                <div className="review">
                    <p>"Outstanding service! My home has never looked better!"</p>
                    <span>- Sarah J.</span>
                </div>
                <div className="review">
                    <p>"Professional and thorough. Highly recommend CleanSSR!"</p>
                    <span>- Mark T.</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;