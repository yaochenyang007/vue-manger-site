module.exports = {
    title: 'vue-element-manger',
    description: 'Mid-Background Solutions',
    // 在 <head> 标签中自定义额外标签
    head: [
      ['meta', { name: 'keywords', content: 'vue,vuepress,blog' }],
      ['link', { rel: 'icon', href: `/favicon.png` }]
    ],
    base: "/mes/",
    extraWatchFiles: [
    '.vuepress/config.js', // 使用相对路径
   ],
    plugins: ['@vuepress/back-to-top','@vuepress/active-header-links'], 
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
            // { text: '首页', link: '/' },
            { text: '指南', link: '/zh/guide/' },
            {
              text: "组件",
              items: [
                {
                  text: "日历",
                  link: "/zh/component/calendar.md"
                },
                {
                  text: "树组件",
                  link: "/zh/component/tree.md"
                },
                {
                  text: "可视化图表",
                  link: "/zh/component/chart.md"
                },
                {
                  text: "锁屏",
                  link: "/zh/component/lock-screen.md"
                },{
                  text: "地图",
                  link: "/zh/component/map.md"
                },
                {
                  text: "富文本",
                  link: "/zh/component/rich-text.md"
                },
                {
                  text: "主题定制",
                  link: "/zh/component/customization.md"
                },
                {
                  text: "动态路由",
                  link: "/zh/component/dynamic-routing.md"
                },
                {
                  text: "拖拽dialog",
                  link: "/zh/component/dialog.md"
                },
                {
                  text: "错误日志",
                  link: "/zh/component/error-log.md"
                },
                {
                  text: "数字渐变",
                  link: "/zh/component/gradient.md"
                }
              ]
            },
            { text: '外链', link: 'https://yaochenyang.xin/vue-element-manger/' },
            {
              text: "其它",
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
          sidebar: {
            "/zh/guide/": [
              {
                title: "基础",
                collapsable: false,
                children: genEssentialsSidebar("/zh")
              },
              {
                title: "进阶",
                collapsable: false,
                children: genAdvancedSidebar("/zh")
              },
              {
                title: "其它",
                collapsable: false,
                children: [
                  // "/zh/guide/other/gitter.md",
                  // "/zh/guide/other/release-notes.md",
                  // "/zh/guide/other/blog.md",
                  // "/zh/guide/other/faq.md"
                ]
              }
            ],
            "/zh/component/": [
              "/zh/component/calendar.md",
              "/zh/component/chart.md",
              "/zh/component/clipboard.md",
              "/zh/component/customization.md",
              "/zh/component/dialog.md",
              "/zh/component/chart.md",
              "/zh/component/dynamic-routing.md",
              "/zh/component/error-log.md",
              "/zh/component/lock-screen.md",
              "/zh/component/gradient.md",
              "/zh/component/map.md",
              "/zh/component/rich-text.md",
              "/zh/component/tree.md"

            ]
          }
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
    description: "vue-element-manger"
  },
  "/zh/": {
    lang: "zh-CN",
    description: "前端后台管理系统解决方案"
  }
},


}
function genEssentialsSidebar(type = "") {
  const mapArr = [
    "/guide/",
    // "/guide/essentials/layout.md",
    // "/guide/essentials/router-and-nav.md",
    // "/guide/essentials/permission.md",
    // "/guide/essentials/tags-view.md",
    // "/guide/essentials/new-page.md",
    // "/guide/essentials/style.md",
    // "/guide/essentials/server.md",
    // "/guide/essentials/mock-api.md",
    // "/guide/essentials/import.md",
    // "/guide/essentials/deploy.md"
  ];
  return mapArr.map(i => {
    return type + i;
  });
}

function genAdvancedSidebar(type = "") {
  const mapArr = [
    // "/guide/advanced/cors.md",
    // "/guide/advanced/eslint.md",
    // "/guide/advanced/git-hook.md",
    // "/guide/advanced/lazy-loading.md",
    // "/guide/advanced/chart.md",
    // "/guide/advanced/SvgIcons.md",
    // "/guide/advanced/FontAwesome.md",
    // "/guide/advanced/theme.md",
    // "/guide/advanced/i18n.md",
    // "/guide/advanced/error.md"
  ];
  return mapArr.map(i => {
    return type + i;
  });
}