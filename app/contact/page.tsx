import React from 'react';
import './ContactPage.css'; // Assuming you have a CSS file for styles

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page" style={{ backgroundColor: '#f9f9f9', color: '#4B0082' }}>
            <header className="header">
                <h1>Contact CleanSSR</h1>
                <p>Your trusted cleaning service</p>
            </header>
            <section className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </section>
            <section className="reviews">
                <h2>What Our Clients Say</h2>
                <div className="review">
                    <p>"CleanSSR did an amazing job! Highly recommend!" - Sarah J.</p>
                </div>
                <div className="review">
                    <p>"Professional and thorough cleaning service!" - Mike T.</p>
                </div>
                <div className="review">
                    <p>"Best cleaning company I've ever used!" - Emily R.</p>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2023 CleanSSR. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactPage;