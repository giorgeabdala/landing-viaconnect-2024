import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        'polkadot': {
/*          'rose': '#DE5172',*/
          rose: '#E2007B',
        },
        'background': {
          'secondary': '#252935',
            'primary': '#191922',
          'terciary': '#0B090E',
          'viaconnect': '#16111B',
        }
        ,
      } ,
        fontFamily: {
        'title': ['"Unbounded"', 'cursive'],
        'body': ['"Unbounded"', 'cursive'],
          'background': ['Unbounded', 'cursive'],
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
      require('daisyui'),
      require('flowbite/plugin')
  ],
  darkMode: ['class', '[data-mode="dark"]'],
}
export default config
