import React from 'react';
import './Button.css'; // Assuming you have a CSS file for styling

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button 
            className={`button ${disabled ? 'button--disabled' : ''}`} 
            onClick={onClick} 
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;