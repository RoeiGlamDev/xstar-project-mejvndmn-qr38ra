import React from 'react';
import './StatsSection.css'; // Assuming a CSS file for styles

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <h2>100+</h2>
                    <p>Satisfied Clients</p>
                </div>
                <div className="stat-item">
                    <h2>500+</h2>
                    <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                    <h2>10+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                    <h2>200+</h2>
                    <p>Positive Reviews</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;