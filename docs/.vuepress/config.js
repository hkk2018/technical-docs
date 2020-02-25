module.exports = {
    title: 'my技術筆記',
    themeConfig: {
        nav: [

            { text: '一般', link: '/一般/Regex' },
            { text: 'MicroSoft', link: '/MicroSoft/DotNet' },
            { text: 'JS', link: '/JS/Quirks' },
            { text: 'TS', link: '/TS/' },
            { text: 'Unreal', link: '/Unreal/FAQ' },

        ],
        sidebar: {
            '/一般/': [
                'Regex',
                'SqlThings',
                'Url',
                'Git',
                'Gimp',
            ],
            '/MicroSoft/': [
                'DotNet',  /* /foo/one.html */
                'DB',
                'Win10',

            ],
            '/JS/': [
                'Quirks',


            ],
            '/TS/': [
                '',      /* /bar/ */
                'FAQ',
            ],
            '/Unreal/': [
                'FAQ', /* /bar/three.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                // 'contact', /* /contact.html */
                // 'about'    /* /about.html */
            ]
        }
    },
    plugins: [['@dovyp/vuepress-plugin-clipboard-copy', true]]

}