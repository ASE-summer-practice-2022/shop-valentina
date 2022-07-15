const mix = require("laravel-mix");


mix.ts("resources/index.tsx", "public/js/app.js")
    .react()
    .sass("resources/index.scss", "public/css/app.css");
