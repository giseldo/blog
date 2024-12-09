import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Neo Blog",
  
  description: "Notícias relacionadas a tecnologia e IA",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sobre', link: '/pages/sobre' },
      { text: 'Cursos', link: 'http://giseldo.github.io/cursos' }
    ],

    sidebar: [
      {
        text: 'Artigos',
        items: [
          { text: 'Avaliação por pares', link: '/posts/2024-12-08-avaliacao-por-pares' },
          { text: 'IA notícias', link: '/posts/2024-11-23-IA-noticias' },
          { text: 'Groq vs Grok', link: '/posts/2024-11-21-groq-vs-grok' },
          { text: 'CodeGPT', link: '/posts/2024-11-19-codegpt' },
          { text: 'LLM Nemotron', link: '/posts/2024-05-01-llm-nemotron' },
          { text: 'Redes Neurais (#1)', link: '/posts/2024-04-01-redes-neurais-1' },
          { text: 'Regressão linear (#1)', link: '/posts/2024-03-01-regressao-linear-1' },
          { text: 'Aprendizagem de máquina (#2) - Heurísticas', link: '/posts/2024-02-02-am-2-heuristicas' },
          { text: 'Aprendizagem de máquina (#1)', link: '/posts/2024-02-01-am-1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Direitos autorais © 2024 Giseldo Neo'
    },
    
    search: {
      provider: 'local'
    }

  }
})
