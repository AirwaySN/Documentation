import { defineConfig } from 'vitepress'

export default defineConfig({
  // Title
  title: "AirwaySN",
  // Description
  description: "AirwaySN Documentation Website",
  // Favicon
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  sitemap: {
    hostname: 'https://docs.airwaysn.org',
    lastmodDateOnly: false
  },

  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '官网首页', link: 'https://airwaysn.org' },
      { text: '在线地图', link: 'https://map.airwaysn.org' }
    ],

    sidebar: [
      {
        text: '基本信息',
        collapsed: false,
        items: [
          { text: '1. 总则', link: '/general.md'},
        ]
      },
      {
        text: '中国管区（除港澳台）',
        collapsed: true,
        items: []
      },
      {
        text: '香港管区',
        collapsed: true,
        items: []
      },
      {
        text: '日本管区',
        collapsed: true,
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/AirwaySN/Documentation/edit/main/:path'
    },

    search: {
      provider: 'local'
    }
  }
})
