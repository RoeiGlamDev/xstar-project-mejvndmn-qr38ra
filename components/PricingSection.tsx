import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Our Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Cleaning</h3>
                        <p className="card-price">$99</p>
                        <ul className="card-features">
                            <li>1 Bedroom</li>
                            <li>Living Room</li>
                            <li>Kitchen</li>
                            <li>Bathroom</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Standard Cleaning</h3>
                        <p className="card-price">$149</p>
                        <ul className="card-features">
                            <li>2 Bedrooms</li>
                            <li>Living Room</li>
                            <li>Kitchen</li>
                            <li>2 Bathrooms</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deep Cleaning</h3>
                        <p className="card-price">$199</p>
                        <ul className="card-features">
                            <li>All Areas</li>
                            <li>Detailed Cleaning</li>
                            <li>Carpet Shampoo</li>
                            <li>Window Cleaning</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                </div>
                <div className="customer-reviews">
                    <h2 className="reviews-title">What Our Customers Say</h2>
                    <p className="review">"CleanSSR did an amazing job! Highly recommend!" - Sarah L.</p>
                    <p className="review">"Professional and thorough. My house has never looked better!" - John D.</p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;