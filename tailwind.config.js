/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
        pangram: ['var(--font-pangram)', 'sans-serif'],
      },
      colors: {
        // "Brand" is your primary blue.
        // 600 is your main accent, 950 is for deep 'almost-black' UI elements.
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Your Signature DreamDecore Blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // "Studio" is your neutral scale.
        // We use a "Slate" base which has a hint of blue to keep it 'premium' and cool.
        studio: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Your Signature "Black" for headers
          950: '#020617',
        },
      },
      // Integrated Typography Scale from our previous step
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--font-size-xs': theme('fontSize.xs')[0],
          '--font-size-sm': theme('fontSize.sm')[0],
          '--font-size-base': theme('fontSize.base')[0],
          '--font-size-lg': theme('fontSize.lg')[0],
          '--font-size-xl': theme('fontSize.xl')[0],
          '--font-size-2xl': theme('fontSize.2xl')[0],
          '--font-size-3xl': theme('fontSize.3xl')[0],
          '--font-size-4xl': theme('fontSize.4xl')[0],
          '--font-size-5xl': theme('fontSize.5xl')[0],
          '--font-size-6xl': theme('fontSize.6xl')[0],
          '--font-size-7xl': theme('fontSize.7xl')[0],
          '--font-size-8xl': theme('fontSize.8xl')[0],
          '--font-size-9xl': theme('fontSize.9xl')[0],
        },
        h1: {
          fontSize: `clamp(${theme('fontSize.4xl')[0]}, 5vw, ${
            theme('fontSize.6xl')[0]
          })`,
          fontWeight: 'bold',
        },
        h2: {
          fontSize: `clamp(${theme('fontSize.3xl')[0]}, 4vw, ${
            theme('fontSize.5xl')[0]
          })`,
          fontWeight: 'bold',
        },
        h3: {
          fontSize: `clamp(${theme('fontSize.2xl')[0]}, 3vw, ${
            theme('fontSize.4xl')[0]
          })`,
          fontWeight: 'bold',
        },
        h4: {
          fontSize: `clamp(${theme('fontSize.xl')[0]}, 2.5vw, ${
            theme('fontSize.3xl')[0]
          })`,
          fontWeight: 'bold',
        },
        h5: {
          fontSize: `clamp(${theme('fontSize.lg')[0]}, 2vw, ${
            theme('fontSize.2xl')[0]
          })`,
          fontWeight: 'bold',
        },
        h6: {
          fontSize: `clamp(${theme('fontSize.base')[0]}, 1.8vw, ${
            theme('fontSize.xl')[0]
          })`,
          fontWeight: 'bold',
        },
        p: {
          fontSize: theme('fontSize.base')[0],
        },
      })
    },
  ],
}
