module.exports = {
    title: 'zy_docs',
    description: 'Just playing around',
    head: [], // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
    // serviceWorker: true, // 是否开启 PWA
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        displayAllHeaders: false, // 显示所有页面的标题链接 默认值：false
        activeHeaderLinks: true, // 默认值：true
        sidebarDepth: 4,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/zhangyang89hi/zy_test' },
            { 
                text: 'more', 
                // link: '',
                items: [
                    { text: '1', link: '/' },
                    { text: '2', link: '/' },
                    { text: '3', link: '/' }
                ]
            },
        ],
        sidebar: [
            ['/', 'home'],
            {
                title: 'html',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/html'
                ]
            },
            {
                title: 'css',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/css',
                  '/animate'
                ]
            },
            {
                title: 'js',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/js-b', 'js 基础'],
                  ['/js-h', 'js 高级'],
                  ['/ES6', 'ES6']
                ]
            },
            {
                title: 'web',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/web-develop', 'develop'],
                  ['/web-learning', 'learning']
                ]
            },
            ['/vue', 'vue'],
            ['/react', 'react'],
            {
                title: 'lib',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    'canvas',
                    'charts'
                ]
            },
            {
                title: 'server',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/node', 'node'],
                  ['/server', 'server'],
                  ['/dataBase', 'dataBase']
                ]
            }
        ]
    }

}