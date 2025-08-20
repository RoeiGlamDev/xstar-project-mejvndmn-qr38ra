import React from 'react';
import { styled } from '@mui/system';

const GradientBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, #ffffff 0%, #8e44ad 100%)', // White to Purple gradient
  zIndex: -1, // Ensure it stays behind other content
});

const GradientBackgroundComponent: React.FC = () => {
  return <GradientBackground />;
};

export default GradientBackgroundComponent;