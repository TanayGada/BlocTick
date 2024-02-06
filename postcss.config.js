

// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import flowbite from 'flowbite/plugin.js';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    flowbite
  ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
}
