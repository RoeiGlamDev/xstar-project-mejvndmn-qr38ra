import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Eco-Friendly Products',
    description: 'We use environmentally safe cleaning products that are safe for your family and pets.',
  },
  {
    title: 'Experienced Team',
    description: 'Our team is highly trained and experienced in providing top-notch cleaning services.',
  },
  {
    title: 'Flexible Scheduling',
    description: 'We offer flexible scheduling options to fit your busy lifestyle.',
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'We guarantee your satisfaction with our cleaning services or your money back.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Cleaning Services</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;