import {defineConfig} from 'vitepress';
import {processData} from "@chunge16/vitepress-blogs-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  base: "/blog/",  
  cleanUrls: true,
  title: "Neo Blog",
  description: "Um blog relacionado a inteligência artificial",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tags', link: '/blog/tags' },
      { text: 'Arquivos', link: '/blog/archives' },      
      { text: 'Sobre', link: '/blog/pages/sobre' },
      { text: 'Cursos', link: 'http://giseldo.github.io/cursos' }      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/giseldo/blog' },
      { icon: 'twitter', link: 'https://twitter.com/giseldoneo' },
      { icon: 'instagram', link: 'https://instagram.com/neogiseldo' },
      { icon: 'youtube', link: 'https://youtube.com/giseldoneo' }
    ],

    blog: {
      title: 'Neo Blog',
      description: 'Um blog com artigos sobre tecnologia, inteligência artificial e aprendizagem de máquina!',
      defaultAuthor: 'AI Writer',
      categoryIcons: {
        artigo: 'i-[carbon/notebook]',
        documentação: 'i-[carbon/book]',
        notícias: 'i-[carbon/document]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[logos/vue]',
        javascript: 'i-[logos/javascript]',
        'web development': 'i-[carbon/development]',
        html: 'i-[logos/html-5]',
        git: 'i-[logos/git-icon]',
        vite: 'i-[logos/vitejs]',
        locked: 'i-[twemoji/locked]',
        react: 'i-[logos/react]',
        blog: 'i-[carbon/blog]',
        comment: 'i-[carbon/add-comment]',
      },
      giscus: {
        repo: "giseldo/blog",
        repoId: "R_kgDONaUAxw",
        category: "General",
        categoryId: "DIC_kwDONaUAx84ClDNp",
        mapping: 'pathname', 
        inputPosition: 'top', 
        lang: 'en', 
        lightTheme: 'light', 
        darkTheme: 'transparent_dark', 
        defaultEnable: true, 
      }
    },

  },
  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
})
