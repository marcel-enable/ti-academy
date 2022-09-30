const tiConfig = require('./ti-config.json');

const INSTANCE_NAME = process.env.INSTANCE;
let instanceSettings = {};

function getInstanceSetting(settingName, defaultSetting) {
  if (!Object.keys(instanceSettings).length) {
    const { instances = [] } = tiConfig;
    let instance = instances[0];

    if (INSTANCE_NAME) {
      const possibleMatch = instances.find(instance => instance.nickname === INSTANCE_NAME);
      if (possibleMatch && possibleMatch.apiKey) {
        instance = possibleMatch;
      }
    }

    instanceSettings = instance;
  }

  return instanceSettings[settingName] || defaultSetting;
}

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './dist/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '414px',
      md: '640px',
      lg: '1024px',
      xl: '1280px'
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1440px',
      // '2xl': '1920px',
      // '3xl': '2560px'
    },
    boxShadow: {
      DEFAULT: '0px 0px 5px #4d90fe',
      lg: '0px 0px 12px -2px rgba(0, 0, 0, 0.25)',
      md:'0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      banner:'0px 20px 50px rgba(0, 0, 0, 0.15)',
      none: 'none'
    },
    fontSize: {
      xs: '0.625rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideDown: {
          from :{
            transform: 'translateY(-100vh)',
            opacity: 0
          },
          to: {transform: 'translateY(0)', opacity: 1},
        },
        slideDownLess: {
          from :{
            transform: 'translateY(-50vh)',
          },
          to: {transform: 'translateY(0)'},
        },
        slideLeft: {
          from :{
            transform: 'translateX(-100vw)',
            opacity: 0
          },
          to: {transform: 'translateX(0)', opacity: 1},
        },
        slideRight: {
          from :{
            transform: 'translateX(100vw)',
            opacity: 0
          },
          to: {transform: 'translateX(0)', opacity: 1},
        },
        fadeIn: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        slideDownSlow: 'slideDownLess 3s ease-out forwards',
        slideDown: 'slideDown 1.2s ease-out forwards',
        slideLeft: 'slideLeft 1.2s ease-out forwards',
        slideRight: 'slideRight 1.2s ease-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1.2s ease-out forwards'
      },
      colors: {
        accent: getInstanceSetting('accentColor', '#111111'),
        secondary: getInstanceSetting('secondaryColor', '#111111'),
        link: getInstanceSetting('linkColor', '#a9a9a9'),
        'accent-highlight': '#111111',
        'accent-highlight-background': '#dddddd',
        'accent-tinted': {
          70: '#b8b8b8',
          80: '#cfcfcf',
          90: '#e7e7e7'
        },
        'accent-contrast': '#ffffff',
        'accent-contrast-tinted-background': '#b3b3b3',
        'accent-hover': '#2b2b2b',
        'secondary-hover': '#2b2b2b',
        'secondary-contrast': '#ffffff',
        'link-hover': '#767676',
        'brand-primary': '#1B2747',
        'brand-primary-light': '#0075B4',
        'brand-secondary': '#4771A1',
        'brand-secondary-light': '#F9EC31',
        'brand-tertiary': '#70C4ED',
        'brand-accent': '#EA2B7B',
        'brand-muted': '#243746',
        'ui-primary': '#374151',
        'ui-secondary': '#6B7280',
        'ui-tertiary': '#D1D5DB',
        'ui-quaternary': '#F9FAFB',
        'ui-disabled': '#EAEDEF',
        'text-color-primary': '#1F2937',
        'text-color-secondary': '#6B7280',
        'text-color-disabled': '#A1A1AA',
        'text-color-inverse': '#FFFFFF',
        'border-100': '#E5E7EB',
        'border-200-default': '#D1D5DB',
        'border-300': '#9CA3AF',
        'border-disabled': '#E4E4E7',
        'surface-100': '#FFFFFF',
        'surface-200': '#FAFAFA',
        'surface-300': '#F5F5F7',
        'surface-disabled': '#E4E4E7',
        'surface-default': '#F3F4F6',
        'light-constant': '#FFFFFF',
        'dark-constant': '#18242E'
      },
      backgroundColor: {
        'brand-primary': '#1B2747',
      },
      fontFamily: {
        primary: [getInstanceSetting('font', 'Inter'), 'Nunito', 'sans-serif'],
        header: [getInstanceSetting('font', 'Inter'), 'Nunito', 'sans-serif'],
        secondary: [getInstanceSetting('altFont', 'Poppins'), 'sans-serif'],
        dashboardHeader: [getInstanceSetting('font', 'Roboto Condensed'), 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
