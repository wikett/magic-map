import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

export default <Partial<Config>>{
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue': {
          '50': '#f1f8fe',
          '100': '#e2effc',
          '200': '#bedef9',
          '300': '#63b4f2',
          '400': '#43a6ed',
          '500': '#1a8add',
          '600': '#0d6dbc',
          '700': '#0c5698',
          '800': '#0e4b7e',
          '900': '#123f68',
          '950': '#0c2845',
        },
        'red': {
          '50': '#fef2f2',
          '100': '#fde4e3',
          '200': '#fccdcc',
          '300': '#f9aaa8',
          '400': '#f26763',
          '500': '#e94e4a',
          '600': '#d6312c',
          '700': '#b42521',
          '800': '#95221f',
          '900': '#7c2320',
          '950': '#430e0c',
        },
        'yellow': {
          '50': '#fcfde9',
          '100': '#f5fac7',
          '200': '#f1f692',
          '300': '#f0f263',
          '400': '#ebe524',
          '500': '#dbcd17',
          '600': '#bda311',
          '700': '#977711',
          '800': '#7d5f16',
          '900': '#6b4d18',
          '950': '#3e2a0a',
        },
        'cool': {
          '50': '#f4f8f9',
          '100': '#ebf3f4',
          '200': '#dae9eb',
          '300': '#c4d8dd',
          '400': '#abc5ce',
          '500': '#95b1bf',
          '600': '#7e9aad',
          '700': '#758c9d',
          '800': '#596c7a',
          '900': '#4b5a64',
          '950': '#2c343a',
        },
        'gray': {
          '50': '#f6f7f9',
          '100': '#eceef2',
          '200': '#d5d9e2',
          '300': '#b1bbc8',
          '400': '#8695aa',
          '500': '#64748b',
          '600': '#526077',
          '700': '#434e61',
          '800': '#3a4252',
          '900': '#343a46',
          '950': '#23272e',
      }, 
      }
    }
  }
}

