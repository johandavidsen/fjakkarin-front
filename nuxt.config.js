const wpNuxtFeed = require('wp-nuxt/lib/rss')

export default {
    head: {
        title: 'Fjakkarin',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    hooks: {
        render: {
            errorMiddleware(app) {
                app.use((error, _req, _res, next) => {
                    console.log(error)
                    next(error);
                });
            },
        },
    },
    wp: {
        sitemap: {
            hostname: "http://headless.dev.anu.gl.test"
        }
    },
    modules: [
        [ 'wp-nuxt', {
            endpoint: 'http://headless.dev.anu.gl.test/wp-json',
            extensions: true
        }],
        '@nuxtjs/tailwindcss'
    ]
}