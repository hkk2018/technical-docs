module.exports = {
    title: 'my技術筆記',
    themeConfig: {
        nav: [

            { text: '一般', link: '/一般/' },
            { text: 'TS', link: '/TS/' },
            { text: 'Unreal', link: '/Unreal/testnodefualt.html' },

        ],
        sidebar: {
            '/一般/': [
                '',     /* /foo/ */
                'dsad',  /* /foo/one.html */
            ],
            '/TS/': [
                '',      /* /bar/ */

            ],
            '/Unreal/': [
                'testnodefualt', /* /bar/three.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                // 'contact', /* /contact.html */
                // 'about'    /* /about.html */
            ]
        }
    }

}