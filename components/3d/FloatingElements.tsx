import React from 'react';
import './FloatingElements.css'; // Assuming you have a CSS file for styles

const FloatingElements: React.FC = () => {
    return (
        <div className="floating-elements">
            <div className="floating-element purple">
                <h3>Eco-Friendly Cleaning</h3>
                <p>We use environmentally safe products for a cleaner home.</p>
            </div>
            <div className="floating-element white">
                <h3>Expert Team</h3>
                <p>Our trained professionals ensure top-notch service.</p>
            </div>
            <div className="floating-element purple">
                <h3>Customer Satisfaction</h3>
                <p>Your happiness is our priority, guaranteed!</p>
            </div>
            <div className="floating-element white">
                <h3>Flexible Scheduling</h3>
                <p>We work around your schedule for your convenience.</p>
            </div>
        </div>
    );
};

export default FloatingElements;