import autoprefixer from 'autoprefixer'; // Importing autoprefixer for vendor prefixing
import cssnano from 'cssnano'; // Importing cssnano for CSS minification

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes
    cssnano({ preset: 'default' }) // Minify CSS
  ]
};