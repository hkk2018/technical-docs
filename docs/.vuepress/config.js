module.exports = {
    title: 'my技術筆記',
    themeConfig: {
        nav: [

            { text: '一般', link: '/一般/DotNet' },
            { text: 'TS', link: '/TS/' },
            { text: 'Unreal', link: '/Unreal/FAQ' },

        ],
        sidebar: {
            '/一般/': [
                'DotNet',  /* /foo/one.html */
                'SqlThings',
                'Url',
                'Regex'
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