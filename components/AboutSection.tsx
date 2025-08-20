import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About CleanSSR</h2>
                <p>
                    At CleanSSR, we believe in providing top-notch cleaning services
                    that leave your spaces spotless and fresh. Our team is dedicated
                    to delivering exceptional results with a focus on customer satisfaction.
                </p>
                <p>
                    With years of experience in the cleaning industry, we use the
                    latest techniques and eco-friendly products to ensure a clean and
                    safe environment for you and your loved ones.
                </p>
            </div>
            <div className="about-reviews">
                <h3>What Our Clients Say</h3>
                <div className="review">
                    <p>"CleanSSR transformed my home! Highly recommend!"</p>
                    <span>- Sarah J.</span>
                </div>
                <div className="review">
                    <p>"Professional and thorough service. Will use again!"</p>
                    <span>- Mark T.</span>
                </div>
                <div className="review">
                    <p>"Great attention to detail and very friendly staff."</p>
                    <span>- Emily R.</span>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;