import React from 'react';
import './GlassCard.css'; // Assuming you have a CSS file for styles

const GlassCard: React.FC<{ title: string; content: string; imageUrl?: string }> = ({ title, content, imageUrl }) => {
    return (
        <div className="glass-card">
            {imageUrl && <img src={imageUrl} alt={title} className="glass-card-image" />}
            <h3 className="glass-card-title">{title}</h3>
            <p className="glass-card-content">{content}</p>
        </div>
    );
};

export default GlassCard;