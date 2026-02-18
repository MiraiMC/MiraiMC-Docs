import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MiraiMC 帮助手册",
  titleTemplate: 'MiraiMC 帮助手册 | :title',
  description: "有关使用 MiraiMC 的一切东西都在这里",
  lang: 'zh-Hans',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.miraimc.dreamvoid.me'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '帮助手册', link: '/tutorial/server-start', activeMatch: '/.+' },
      { text: 'Javadoc', link: 'https://jd.miraimc.dreamvoid.me/' },
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: '安装并使用插件（服主）', link: '/tutorial/server-start' },
          { text: '基于本插件开发（插件开发者）', link: '/tutorial/developer-start' },
          { text: '使用扫码登录', link: '/tutorial/use-qrcode-login' }
        ],
      },
      {
        text: '资料',
        items: [
          { text: '命令和权限', link: '/docs/commands-and-permissions' },
          { text: '配置文件', link: '/docs/configure-file' }
        ],
      },
      {
        text: '疑难解答',
        items: [
          { text: '常见问题', link: '/troubleshoot/faq' },
          { text: '登录验证指南', link: '/troubleshoot/verify-guide' },
          {
            text: '兼容性报告',
            link: '/troubleshoot/compatibility-report/',
            items: [
              { text: 'Cauldron', link: '/troubleshoot/compatibility-report/cauldron' }
            ]
          }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DreamVoid/MiraiMC' },
      { icon: 'modrinth', link: 'https://modrinth.com/plugin/miraimc' }
    ],

    editLink: {
      pattern: 'https://github.com/MiraiMC/MiraiMC-Docs/edit/vitepress/:path',
      text: '在 GitHub 上编辑此页'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // 如果你想翻译默认语言，请将此处设为 `root`
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message: '<a href="https://github.com/DreamVoid">DreamVoid</a> 和 <a href="https://github.com/MiraiMC">MiraiMC</a>，用 ❤ 制作',
      copyright: '使用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享 署名-非商业性使用-相同方式共享 4.0协议</a>发布'
    }
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
