import React from 'react';
import './loading.css'; // Import CSS for loading styles

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <h2 className="loading-text">Loading...</h2>
        </div>
    );
};

export default Loading;