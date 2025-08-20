import React from 'react';
import './ContactSection.css'; // Assuming there's a CSS file for styles

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: '#f9f9f9', color: '#4B0082' }}>
            <div className="container">
                <h2>Contact Us</h2>
                <p>At CleanSSR, we are dedicated to providing the best cleaning services. Reach out to us!</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="submit-button" style={{ backgroundColor: '#4B0082', color: '#fff' }}>
                        Send Message
                    </button>
                </form>
                <div className="reviews">
                    <h3>What Our Clients Say</h3>
                    <blockquote>
                        "CleanSSR transformed my home! Highly recommend!" - Sarah J.
                    </blockquote>
                    <blockquote>
                        "Professional and efficient service. Will use again!" - Mark T.
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;