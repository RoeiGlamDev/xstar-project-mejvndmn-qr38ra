import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify the paths to all of the template files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B46C1', // Purple color
        secondary: '#FFFFFF', // White color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
};

export default config;