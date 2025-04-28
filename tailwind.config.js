/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          purple: {
            500: '#6B46C1',
            600: '#5B38A6',
            700: '#4A2A8C'
          }
        }
      }
    },
    plugins: []
  };