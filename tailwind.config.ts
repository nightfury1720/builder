import { withUt } from 'uploadthing/tw'
import colors from 'tailwindcss/colors'

module.exports = ({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Tremor module
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[700],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
        boxShadow: {
          // light
          'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          'tremor-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'tremor-dropdown':
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          // dark
          'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          'dark-tremor-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'dark-tremor-dropdown':
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
        borderRadius: {
          'tremor-small': '0.375rem',
          'tremor-default': '0.5rem',
          'tremor-full': '9999px',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'washed-blue-50': '#f0f3ff',
        'washed-blue-100': '#d0daff',
        'washed-blue-200': '#bac9ff',
        'washed-blue-300': '#9ab0ff',
        'washed-blue-400': '#86a1ff',
        'washed-blue-500': '#6889ff',
        'washed-blue-600': '#5f7de8',
        'washed-blue-700': '#4a61b5',
        'washed-blue-800': '#394b8c',
        'washed-blue-900': '#2c3a6b',
        'washed-purple-50': '#f8f7ff',
        'washed-purple-100': '#e8e7ff',
        'washed-purple-200': '#dddcff',
        'washed-purple-300': '#cecbff',
        'washed-purple-400': '#c5c1ff',
        'washed-purple-500': '#b6b2ff',
        'washed-purple-600': '#a6a2e8',
        'washed-purple-700': '#817eb5',
        'washed-purple-800': '#64628c',
        'washed-purple-900': '#4c4b6b',
        'primary-blue-50': '#e6f0ff',
        'primary-blue-100': '#b2d1ff',
        'primary-blue-200': '#8cbaff',
        'primary-blue-300': '#589bff',
        'primary-blue-400': '#3787ff',
        'primary-blue-500': '#0569ff',
        'primary-blue-600': '#0560e8',
        'primary-blue-700': '#044bb5',
        'primary-blue-800': '#033a8c',
        'primary-blue-900': '#022c6b',
        'primary-purple-50': '#f1e6ff',
        'primary-purple-100': '#d3b0ff',
        'primary-purple-200': '#bd8aff',
        'primary-purple-300': '#9f54ff',
        'primary-purple-400': '#8d33ff',
        'primary-purple-500': '#7000ff',
        'primary-purple-600': '#6600e8',
        'primary-purple-700': '#5000b5',
        'primary-purple-800': '#3e008c',
        'primary-purple-900': '#2f006b',
        'Neutrals/neutrals-1': '#ffffff',
        'Neutrals/neutrals-2': '#fcfcfd',
        'Neutrals/neutrals-3': '#f5f5f6',
        'Neutrals/neutrals-4': '#f0f0f1',
        'Neutrals/neutrals-5': '#d9d9dc',
        'Neutrals/neutrals-6': '#c0bfc4',
        'Neutrals/neutrals-7': '#8d8c95',
        'Neutrals/neutrals-8': '#5b5966',
        'Neutrals/neutrals-9': '#464553',
        'Neutrals/neutrals-10': '#282637',
        'Neutrals/neutrals-11': '#201f30',
        'Neutrals/neutrals-12': '#161427',
        'Neutrals/neutrals-13': '#020014',
        'brand-washedPurple': '#b5b2ff',
        'brand-washedBlue': '#6889ff',
        'brand-primaryBlue': '#0469ff',
        'brand-primaryPurple': '#7000ff',
        'brand-dark': '#030014',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'automation-zoom-in': {
          '0%': { transform: 'translateY(-30px) scale(0.2)' },
          '100%': { transform: 'transform: translateY(0px) scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'automation-zoom-in': 'automation-zoom-in 0.5s',
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require('tailwindcss-animate')],
})