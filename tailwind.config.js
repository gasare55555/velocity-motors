const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    screens: {
      xxs: '18.75rem',
      xs: '25.75rem',
      xspx: '412px',
      sm: '40rem',
      smpx: '640px',
      md: '48rem',
      mdvar: '45.75rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
      widescreen: {raw: "(min-aspect-ratio: 3/2)"},
      tallscreen: {raw: "(max-aspect-ratio: 13/20)"}
    },
    extend: {
      fontSize: {
        xlvar: ['clamp(1rem, 3.125vw, 1.5rem)', { lineHeight: '1.75rem' }],
        '2xlvar': ['clamp(1.25rem, 3.90625vw, 1.875rem)', { lineHeight: '2rem' }],
        '3xlvar': ['clamp(1.5rem, 4.6875vw, 2.25rem)', { lineHeight: '2.25rem' }],
        '4xlvar': ['clamp(1.875rem, 6.25vw, 3rem)', { lineHeight: '2.5rem' }],
        '9xlvar': ['clamp(4.5rem, 16.6666vw, 8rem)', { lineHeight: '1' }],
      },
      spacing: {
        '1var': 'clamp(0.125rem, 0.9375vh, 0.375rem)',
        '8var': 'clamp(2rem, 5.625vw, 2.25rem)' 
      },
      keyframes: {
        "open-menu": {
          "0%": { 
            transform: "scaleY(0)"
          },
          "70%": {
            transform: "scaleY(1.2)"
          },
          "100%": {
            transform: "scaleY(1)"
          } 
        },
        "close-menu": {
          "0%": { 
            transform: "scaleY(1)"
          },
          "35%": {
            transform: "scaleY(1.2)"
          },
          "100%": {
            transform: "scaleY(0)"
          } 
        },
        "lift-car": {
          "0%": {
            transform: "rotate(0)"
          },
          "14%": {
            transform: "rotate(50deg)",
            filter: "brightness(1)"
          },
          "48%": {
            transform: "rotate(30deg)",
          },
          "50%": {
            transform: "translateY(-40%) rotate(30deg)",
            filter: "brightness(4)"
          },
          "70%": {
            transform: "translateY(0) rotate(30deg)",
            filter: "brightness(1)"
          },
          "90%": {
            transform: "rotate(-10deg)"
          },
          "100%": {
            transform: "rotate(0)"
          }
        },
        "bend-car": {
          "0%": {
            transform: "rotateY(0)",
            filter: "brightness(1)"
          },
          "50%": {
            transform: "rotateY(-45deg)"
          },
          "60%": {
            filter: "brightness(3)"
          },
          "75%": {
            transform: "rotateY(0)"
          },
          "85%": {
            transform: "rotateY(23deg)"
          },
          "100%": {
            transform: "rotateY(0)",
            filter: "brightness(1)"
          }
        }
      },
      animation: {
        "open-menu": "open-menu 0.4s ease-in-out forwards",
        "close-menu": "close-menu 0.4s ease-in-out forwards",
        "lift-car": "lift-car 1.2s",
        "bend-car": "bend-car 1s"
      }
    },
  },
  plugins: [],
}

