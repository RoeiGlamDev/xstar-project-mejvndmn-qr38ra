import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#4B0082', padding: '20px' }}>
      <h1 style={{ color: '#800080' }}>CleanSSR</h1>
      <h2>Website Overview</h2>
      <p>Welcome to CleanSSR, your go-to cleaning service provider. Our website is designed with a clean and modern aesthetic, utilizing a white and purple color scheme to create a refreshing user experience.</p>

      <h2>Design</h2>
      <p>The website features a minimalist design that emphasizes functionality and ease of use. Key design elements include:</p>
      <ul>
        <li>White background for a clean look</li>
        <li>Purple accents for branding and highlights</li>
        <li>Responsive layout for mobile and desktop views</li>
      </ul>

      <h2>Reviews</h2>
      <p>We value our customers' feedback. Here are some reviews from our satisfied clients:</p>
      <blockquote>
        <p>"CleanSSR transformed my home! Highly recommend their services!" - Jane D.</p>
      </blockquote>
      <blockquote>
        <p>"Professional and efficient. My office has never looked better!" - John S.</p>
      </blockquote>

      <h2>Content</h2>
      <p>Our website includes detailed information about our services, pricing, and booking options. We aim to provide a seamless experience for our users.</p>

      <h2>Get Started</h2>
      <p>Visit our website to learn more about our services and to book your cleaning today!</p>
    </div>
  );
};

export default README;