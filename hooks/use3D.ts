import { useEffect, useRef } from 'react';

const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // 3D effect setup
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Drawing logic for 3D effect goes here
            
            requestAnimationFrame(draw);
        };

        draw();

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return canvasRef;
};

export default use3D;