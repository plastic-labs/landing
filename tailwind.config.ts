import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: 'media',
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, var(--tw-gradient-stops))'
      },
      colors: {
        'gradient-grey-transparent': 'rgba(217,217,217,0)',
        'gradient-grey-opaque': 'rgba(217,217,217,1)',
        'gradient-grey-between': 'rgba(217,217,217,0.3)',
      },
      fontFamily: {
        exo2: ['var(--font-exo2)'],
      }
    },
  },
  plugins: [],
}
export default config
