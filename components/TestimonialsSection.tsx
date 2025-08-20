import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: "John Doe",
    review: "CleanSSR did an amazing job! My house has never looked better.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Professional and thorough. Highly recommend their services!",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    review: "Quick and efficient cleaning. Will definitely use again!",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-review">"{testimonial.review}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-rating">Rating: {testimonial.rating} ★</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;