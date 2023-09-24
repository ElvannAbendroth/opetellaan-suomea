/** @type {import('tailwindcss').Config} */

const themeSwapper = require('tailwindcss-theme-swapper')
const colors = require('tailwindcss/colors')

const darkest = colors.gray[950]
const lightest = colors.gray[50]

const themeSwapperPlugin = themeSwapper({
  themes: [
    {
      name: 'base',
      selectors: [':root'],
      theme: {
        colors: {
          background: lightest,
          foreground: darkest,
          border: colors.gray[300],
          input: colors.white,
          ring: colors.gray[200],
          primary: {
            DEFAULT: '#133D7D', //blueberry
            hover: '#3A70A9',
            foreground: lightest,
          },
          secondary: {
            DEFAULT: '#748E49',
            hover: '#97AC75',
            foreground: lightest,
          },
          tertiary: {
            DEFAULT: '#8C4DCF', //berry magenta
            hover: '#A275D3',
            foreground: darkest,
          },
          destructive: {
            DEFAULT: colors.red[500],
            hover: colors.red[400],
            foreground: lightest,
          },
          success: {
            DEFAULT: colors.teal[500],
            hover: colors.teal[400],
            foreground: darkest,
          },
          warn: {
            DEFAULT: colors.teal[500],
            hover: colors.teal[400],
            foreground: lightest,
          },
          muted: {
            DEFAULT: colors.gray[500],
            hover: colors.gray[400],
            foreground: lightest,
          },
          accent: {
            DEFAULT: colors.teal[600],
            hover: colors.teal[500],
            foreground: lightest,
          },
          popover: {
            DEFAULT: lightest,
            foreground: darkest,
          },
          card: {
            DEFAULT: lightest,
            foreground: darkest,
          },
        },
      },
    },
    {
      name: 'dark',
      selectors: ['.dark', '[data-theme="dark"]'],
      theme: {
        colors: {
          background: darkest,
          foreground: lightest,
          primary: {
            DEFAULT: colors.violet[500],
            hover: colors.violet[400],
            foreground: lightest,
          },
          border: colors.gray[800],
          input: colors.gray[950],
          ring: colors.gray[800],
          muted: {
            DEFAULT: colors.gray[600],
            hover: colors.gray[500],
            foreground: lightest,
          },
          popover: {
            DEFAULT: darkest,
            foreground: lightest,
          },
          card: {
            DEFAULT: darkest,
            foreground: lightest,
          },
        },
      },
    },
  ],
})

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      maxWidth: {
        layout: '64rem',
        content: '48rem',
      },
      fontFamily: {
        body: ['Lato'],
        display: ['Poppins'],
        mono: ['Roboto Mono'],
      },
      borderRadius: {
        lg: '0.6rem',
        md: '0.3rem',
        sm: '0.1rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    themeSwapperPlugin,
  ],
}
