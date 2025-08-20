import React from 'react';

export type AnimationType = 'fadeIn' | 'fadeOut' | 'slideIn' | 'slideOut' | 'bounce';

// Animation component
const Animation: React.FC<{ type: AnimationType }> = ({ type, children }) => {
    const animationClass = `animate__${type}`; // Using animate.css classes

    return <div className={animationClass}>{children}</div>;
};

export default Animation;