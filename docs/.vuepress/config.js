module.exports = {
    title: 'vue-element-manger',
    description: 'Mid-Background Solutions',
    // 在 <head> 标签中自定义额外标签
    head: [
      ['meta', { name: 'keywords', content: 'vue,vuepress,blog' }],
      ['link', { rel: 'icon', href: `/favicon.png` }]
    ],
    themeConfig: {
      locales: {
        '/': {
          selectText: 'Languages',
          label: 'English',
          editLinkText: 'Edit this page on GitHub',
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          lastUpdated: 'Last Updated', // string | boolean
          algolia: {},
          nav: [
            { text: 'Home', link: '/' },
            { text: 'components', link: '/component/clipboard' },
            { text: 'Guide', link: '/guide/other/gitter' },
            { text: 'External', link: 'https://baidu.com' },
            {
              text: "other",
              items: [
                {
                  text: "GitHub",
                  link: "https://github.com/yaochenyang007"
                },
                {
                  text: "Blog",
                  link: "https://yaochenyang.xin"
                },
                {
                  text: "update",
                  link: "https://yaochenyang.xin"
                },
                {
                  text: "Common problem",
                  link: "/guide/other/problem.md"
                }
              ]
            },
            // 下拉列表显示分组
            {
              text: 'senior',
              items: [
                { 
                  text: 'algorithm', 
                  items: [
                    { text: 'Bubbling', link: '/language/chinese' },
                    { text: 'fast', link: '/language/japanese' }
                  ] 
                },
                { 
                  text: 'Design Patterns', 
                  items: [
                    { text: 'factory', link: '/language/chinese' },
                    { text: 'Single case', link: '/language/chinese'},
                  ] 
                },
              ]
            }
          ],sidebar: [
            {
              title: 'Group 1',   // 必要的
              path: '/foo/',      // 可选的, 应该是一个绝对路径
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/'
              ]
            },
            {
              title: 'Group 2',
              children: [ /* ... */ ]
            }
           
          ]
        },  
        '/zh/': {
          // 多语言下拉菜单的标题
          selectText: '选择语言',
          // 该语言在下拉菜单中的标签
          label: '简体中文',
          // 编辑链接文字
          editLinkText: '在 GitHub 上编辑此页',
          // Service Worker 的配置
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用.",
              buttonText: "刷新"
            }
          },
          lastUpdated: 'Last Updated', // string | boolean
          displayAllHeaders: true, // 默认值：false
          // 当前 locale 的 algolia docsearch 选项
          algolia: {},
          nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/zh/component/clipboard' },
            { text: '指南', link: '/zh/guide/other/gitter' },
            { text: '外链', link: 'https://baidu.com' },
            {
              text: "其它",
              items: [
                {
                  text: "GitHub",
                  link: "https://github.com/yaochenyang007"
                },
                {
                  text: "作者Blog",
                  link: "https://yaochenyang.xin"
                },
                {
                  text: "更新记录",
                  link: "https://yaochenyang.xin"
                },
                {
                  text: "常见问题",
                  link: "/zh/guide/other/problem.md"
                }
              ]
            },
            // 下拉列表显示分组
            {
              text: '高级',
              items: [
                { 
                  text: '算法', 
                  items: [
                    { text: '冒泡', link: '/language/chinese' },
                    { text: '快速', link: '/language/japanese' }
                  ] 
                },
                { 
                  text: '设计模式', 
                  items: [
                    { text: '工厂', link: '/language/chinese' },
                    { text: '单例', link: '/language/chinese'},
                  ] 
                },
              ]
            }
          ],
          sidebar: [
            {
              title: 'Group 1',   // 必要的
              path: '/foo/',      // 可选的, 应该是一个绝对路径
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/'
              ]
            },
            {
              title: 'Group 2',
              children: [ /* ... */ ]
            }
           
          ]
        },
   

  },

},
configureWebpack: {
  resolve: {
    alias: {
      "@public": "./public"
    }
  }
},
locales: {
  "/": {
    lang: "en-US",
    description: "👍 A ui 🐮 ⚔ vue admin"
  },
  "/zh/": {
    lang: "zh-CN",
    description: "👍 A ui 🐮 ⚔ vue manger"
  }
},


}