'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            interval: 200,
        });

        sr.reveal('.reveal', { origin: 'bottom' }); // Reveal elements from the bottom
    }, []);

    return (
        <div>
            <div className="reveal"> {/* Add your content here */} 
                <h2>Welcome to CleanSSR</h2>
                <p>Your trusted cleaning service.</p>
            </div>
            <div className="reveal">
                <h3>Our Services</h3>
                <ul>
                    <li>Residential Cleaning</li>
                    <li>Commercial Cleaning</li>
                    <li>Deep Cleaning</li>
                </ul>
            </div>
            <div className="reveal">
                <h3>Customer Reviews</h3>
                <p>"CleanSSR did an amazing job!" - Jane Doe</p>
                <p>"Highly recommend their services." - John Smith</p>
            </div>
        </div>
    );
};

export default ScrollRevealComponent;