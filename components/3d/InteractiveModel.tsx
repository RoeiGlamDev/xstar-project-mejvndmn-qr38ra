'use client';

import React, { useEffect, useRef } from 'react';

const InteractiveModel: React.FC = () => {
    const modelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (modelRef.current) {
            // Initialize 3D model viewer here (e.g., using Three.js or similar)
            // Example: const scene = new THREE.Scene();
            // Load your 3D model and add it to the scene
        }
    }, []);

    return (
        <div ref={modelRef} style={{ width: '100%', height: '500px', backgroundColor: '#f5f5f5' }}>
            {/* 3D Model will be rendered here */}
        </div>
    );
};

export default InteractiveModel;