module.exports = {
    title: 'hkk技術筆記',
    themeConfig: {
        nav: [
            { text: '一般', link: '/一般/WebDev' },
            { text: 'MicroSoft', link: '/MicroSoft/DotNet' },
            { text: 'JS', link: '/JS/Quirks' },
            { text: 'TS', link: '/TS/' },
            { text: 'Unreal', link: '/Unreal/FAQ' },
            { text: 'Html&Css', link: '/Html&Css/Css' },
        ],
        sidebar: {
            '/一般/': [
                'WebDev',
                'Regex',
                'SqlThings',
                'Url',
                'Git',
                'Gimp',
                'Modbus'
            ],
            '/MicroSoft/': [
                'DotNet',  /* /foo/one.html */
                'DB',
                'DB-syntax',
                'Win10',
                'PowerShell',

            ],
            '/JS/': [
                'Quirks',
                'Notes',
                'NodeJs',
                'Plugins',
                'Vue'
            ],
            '/TS/': [
                '',      /* /bar/ */
                'FAQ',
                'TypeDeclaration',
            ],
            '/Unreal/': [
                'FAQ', /* /bar/three.html */
            ],
            '/Html&Css/': [
                'Css'
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