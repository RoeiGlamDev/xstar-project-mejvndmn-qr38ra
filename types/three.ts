import React from 'react';
import './Three.css'; // Importing CSS for styling

const Three: React.FC = () => {
    return (
        <div className="three-container">
            <h2 className="three-title">Why Choose CleanSSR?</h2>
            <div className="three-cards">
                <div className="card">
                    <h3>Quality Service</h3>
                    <p>We provide top-notch cleaning services tailored to your needs.</p>
                </div>
                <div className="card">
                    <h3>Eco-Friendly Products</h3>
                    <p>We use environmentally safe products for a clean and green home.</p>
                </div>
                <div className="card">
                    <h3>Customer Satisfaction</h3>
                    <p>Your satisfaction is our priority, and we strive to exceed your expectations.</p>
                </div>
            </div>
        </div>
    );
};

export default Three;