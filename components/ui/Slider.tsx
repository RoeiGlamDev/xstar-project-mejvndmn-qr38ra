'use client';

import React, { useState } from 'react';
import './Slider.css'; // Assuming you have a CSS file for styling

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, image: '/images/slide1.jpg', caption: 'Professional Cleaning Services' },
        { id: 2, image: '/images/slide2.jpg', caption: 'Eco-Friendly Products' },
        { id: 3, image: '/images/slide3.jpg', caption: 'Satisfaction Guaranteed' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div className="slider-content">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
                <div className="caption">{slides[currentSlide].caption}</div>
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Slider;