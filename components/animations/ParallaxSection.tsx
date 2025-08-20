'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import './ParallaxSection.css'; // Assuming you have a CSS file for styles

const ParallaxSection: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                <h1 className="parallax-title">Welcome to CleanSSR</h1>
                <p className="parallax-subtitle">Your trusted cleaning partner</p>
            </div>
            <div className="parallax-content">
                <h2>Why Choose Us?</h2>
                <p>We provide top-notch cleaning services tailored to your needs.</p>
                <div className="reviews">
                    <h3>Customer Reviews</h3>
                    <p>"CleanSSR transformed my home!" - Sarah J.</p>
                    <p>"Professional and reliable service." - John D.</p>
                </div>
            </div>
        </div>
    );
};

export default ParallaxSection;