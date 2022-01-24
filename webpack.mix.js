const mix = require('laravel-mix');

mix.ts('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .browserSync({
        proxy: 'localhost', // your domain test
        port: 3000 // your port
      })
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}

mix.disableNotifications();
