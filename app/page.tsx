import React from 'react';
import './styles.css'; // Import your CSS file for styling

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">Welcome to CleanSSR</h1>
        <p className="subtitle">Your trusted cleaning service</p>
      </header>
      <main className="main-content">
        <section className="about">
          <h2>About Us</h2>
          <p>
            At CleanSSR, we provide top-notch cleaning services tailored to your needs. 
            Our team is dedicated to making your space spotless and welcoming.
          </p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Residential Cleaning</li>
            <li>Commercial Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Move In/Out Cleaning</li>
          </ul>
        </section>
        <section className="reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <p>"CleanSSR did an amazing job! Highly recommend!" - Sarah J.</p>
          </div>
          <div className="review">
            <p>"Professional and efficient service." - Mike T.</p>
          </div>
          <div className="review">
            <p>"My home has never looked better!" - Emily R.</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;