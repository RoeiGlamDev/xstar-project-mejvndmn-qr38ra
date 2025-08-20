import React from 'react';
import './PricingPage.css'; // Assuming a CSS file for styles

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page" style={{ backgroundColor: '#f9f9f9', color: '#4B0082' }}>
            <header className="header">
                <h1>CleanSSR Pricing Plans</h1>
                <p>Your clean home is just a click away!</p>
            </header>
            <section className="pricing-plans">
                <div className="plan">
                    <h2>Basic Cleaning</h2>
                    <p>Starting at $50</p>
                    <ul>
                        <li>Dusting</li>
                        <li>Vacuuming</li>
                        <li>Surface Cleaning</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
                <div className="plan">
                    <h2>Deep Cleaning</h2>
                    <p>Starting at $100</p>
                    <ul>
                        <li>Everything in Basic</li>
                        <li>Kitchen Appliances</li>
                        <li>Bathroom Sanitization</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
                <div className="plan">
                    <h2>Move In/Out Cleaning</h2>
                    <p>Starting at $150</p>
                    <ul>
                        <li>Full Home Cleaning</li>
                        <li>Window Washing</li>
                        <li>Carpet Shampooing</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
            </section>
            <section className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review">
                    <p>"CleanSSR did an amazing job! Highly recommend!" - Sarah J.</p>
                </div>
                <div className="review">
                    <p>"Professional and thorough service. My home has never looked better!" - Mike R.</p>
                </div>
                <div className="review">
                    <p>"Great value for the quality of cleaning provided." - Emily T.</p>
                </div>
            </section>
            <footer className="footer">
                <p>© 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;