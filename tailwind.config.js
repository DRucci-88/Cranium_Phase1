const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/**/*.tsx'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {
                  '100': '#876FAF',
                  '300': '#5F4983',
                  '500': '#392C4F',
                  '700': '#0E0B14'
                },
                'secondary': {
                  '100': '#DEF9F3',
                  '300': '#96EED9',
                  '500': '#52E2C0',
                  '700': '#1FB995',
                  '900': '#126B56'
                }
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],

};
