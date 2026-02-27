/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#121212',
        'portfolio-surface': '#1A1A1A',
        'portfolio-elevated': '#242424',
        'portfolio-border': '#2E2E2E',
        'portfolio-accent': '#007AFF',
        'portfolio-accent-glow': '#007AFF33',
        'portfolio-text': '#FFFFFF',
        'portfolio-text-secondary': '#A1A1A1',
        'portfolio-text-muted': '#666666',
        'portfolio-green': '#00D4AA',
        'portfolio-orange': '#FF6B35',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
