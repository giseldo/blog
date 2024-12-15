// `.vitepress/config.js`
import { withSidebar } from 'vitepress-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";


const vitePressOptions = {
    base: '/blog/',
    title: 'Neo Blog',
    tagline: 'Um blog com notícias diárias',
    description: 'Um blog com artigos sobre tecnologia, inteligência artificial e aprendizagem de máquina!',

    mermaid:{

    },

    head: [
        [
          'script',
          { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-YVNTETJZ36' }
        ],
        [
          'script',
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YVNTETJZ36');`
        ]
      ],

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        lastUpdated: {
          text: 'Atualizado em',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },

        nav: [
          { text: 'Home', link: '/' },
          { text: 'Sobre', link: '/pages/sobre' },
          { text: 'Cursos', link: 'http://giseldo.github.io/cursos' } 
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/giseldo/blog' },
          { icon: 'twitter', link: 'https://twitter.com/giseldoneo' },
          { icon: 'instagram', link: 'https://instagram.com/neogiseldo' },
          { icon: 'youtube', link: 'https://youtube.com/giseldoneo' }
        ],

        // discord
        // facebook
        // github
        // instagram
        // linkedin
        // slack
        // twitter
        // youtube

        editLink: {
          pattern: 'https://github.com/giseldo/blog/edit/main/blog/:path'
        },

        search: {
          provider: 'local'
        },

        externalLinkIcon: true,
        aside: true,
        lastUpdate: true,

        docFooter: {
          prev: 'Página anterior',
          next: 'Proxima página'
        },

        footer: {
          message: "Todos os direitos reservados.",
          copyright: "Copyright © 2024 Giseldo Neo",
        },

        returnToTopLabel: 'Início',
        sidebarMenuLabel: 'Menu'

      }
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  // https://vitepress-sidebar.cdget.com/guide/getting-started

  documentRootPath: '/blog/',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFrontmatter: true,
  excludePattern: ['cabecalho.md', 'rodape.md']
};

export default withMermaid(withSidebar(vitePressOptions, vitePressSidebarOptions));
