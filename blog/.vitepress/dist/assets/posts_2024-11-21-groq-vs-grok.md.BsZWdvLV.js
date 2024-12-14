import{_ as l}from"./chunks/giseldo.CX2LeuZ1.js";import{_ as d,c,j as a,a as o,t as s,a2 as m,G as n,w as i,B as u,o as p}from"./chunks/framework.Cc2F01qG.js";const A=JSON.parse('{"title":"Groq vs Grok - Qual a diferença?","description":"Postagem explicando qual a diferença entre o Groq e o Grok","frontmatter":{"date":"2024-11-21T00:00:00.000Z","title":"Groq vs Grok - Qual a diferença?","description":"Postagem explicando qual a diferença entre o Groq e o Grok","category":"Artigo","author":"Giseldo Neo","sidebar":false,"tags":["Large Language Models"]},"headers":[],"relativePath":"posts/2024-11-21-groq-vs-grok.md","filePath":"posts/2024-11-21-groq-vs-grok.md","lastUpdated":1734134202000}'),g={name:"posts/2024-11-21-groq-vs-grok.md"},f={id:"frontmatter-title",tabindex:"-1"};function h(r,e,b,q,G,k){const t=u("center");return p(),c("div",null,[a("h1",f,[o(s(r.$frontmatter.title)+" ",1),e[0]||(e[0]=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),a("p",null,s(r.$frontmatter.description),1),e[3]||(e[3]=m('<hr class="solid"><div class="profile"><img src="'+l+'" alt="Profile Picture"><div class="profile-details"><p>Giseldo Neo</p><p>01/01/2024</p></div></div><hr class="solid"><h2 id="introducao" tabindex="-1">Introdução <a class="header-anchor" href="#introducao" aria-label="Permalink to &quot;Introdução&quot;">​</a></h2><p>Groq e Grok são coisas distintas e desenvolvidas por empresas diferentes, com características e finalidades específicas.</p><p>Geralmente quando nos referimos ao <a href="https://groq.com/" target="_blank" rel="noreferrer">Groq</a> (com Q), estamos nos referindo a uma fornecedora de infraestrutura para inferência em modelos de LLM diversos. Esta empresa vende um serviço de inferência mais rápida do que seus concorrentes para modelos disponíveis abertamente, como <a href="https://www.llama.com/" target="_blank" rel="noreferrer">Llama</a> da Meta, o <a href="https://ai.google.dev/gemma" target="_blank" rel="noreferrer">Gemma</a> do Google, ou o <a href="https://mistral.ai/" target="_blank" rel="noreferrer">Mixtral</a> da Mixtral AI. Já o <a href="https://x.ai/" target="_blank" rel="noreferrer">Grok</a> é comumente utilizado em referência ao chatbot da empresa X (twitter).</p><p>Geralmente, a desenvolvedora de um modelo LLM fornece uma interface para o usuário conversar com o seu modelo em forma de chatbot e também fornece uma API para quem deseja integrar a solução em suas aplicações. Assim é o <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">ChatGPT</a>, da empresa OpenAI. OpenAI cobra 100 R$ para disponibilizar aos assinantes acesso completo aos recursos do seu chatbot, inclusive o recurso de SearchGPT, uma busca na web com o ChatGPT. Já para para a API da OpenAI a modalidade de cobrança é pague-pelo-uso. Veja na <strong>Figura 1</strong> uma imagem do chatbot da OpenAI e na <strong>Figura 2</strong> o playground da OpenAI.</p><blockquote><p><strong>Figura 1</strong> - Chatbot da OpenAI <img src="https://github.com/user-attachments/assets/d5f1caa9-ad37-4891-9a66-8121f6b54dce" alt="ChatGPT chatbot interface"> Fonte: o autor</p></blockquote><blockquote><p><strong>Figura 2</strong> - PlayGround OpenAI <img src="https://github.com/user-attachments/assets/46bf1931-62b5-4c51-a3b5-e9e1e246fd08" alt="PlayGround OpenAI"> Fonte: o Autor</p></blockquote><p>o Groq (com Q) usa uma versão do LLama da Meta em seu <a href="https://groq.com/#" target="_blank" rel="noreferrer">Chatbot Groq</a>, porém seu foco é a <a href="https://console.groq.com/playground" target="_blank" rel="noreferrer">API/playground Groq</a> que funciona no formato pague-pelo-uso. o Chatbot Groq também consome os mesmos créditos pague-pelo-uso, não tendo uma assinatura aparte, como no caso do chatbot do ChatGPT. Veja na <strong>Figura 3</strong> o Chatbot do Groq e na <strong>Figura 4</strong> o Playground do Groq. Note que no Chatbot do Groq não exite o recurso de histórico como no ChatGPT.</p><blockquote><p><strong>Figura 3</strong> - Chatbot do Groq <img src="https://github.com/user-attachments/assets/3c6efe44-9598-4353-a81c-1b5602c0a243" alt="image"> Fonte: o Autor</p></blockquote><blockquote><p><strong>Figura 4</strong> - Playground do Groq <img src="https://github.com/user-attachments/assets/d3729b18-02b6-46b2-a7a2-46a5db54c1c7" alt="image"> Fonte: o Autor</p></blockquote><p>O Grok (com K) Chatbot está disponível para quem tem o acesso premium do twitter, enquanto que a <a href="https://console.x.ai/" target="_blank" rel="noreferrer">API Grok</a>) pode ser acessada na forma pague-pelo-uso. Inclusive o Grok está oferecendo este ano 25 R$ para quem deseja testar o serviço, ou seja, é possível utilizar a API do Grok sem desembolsar nada neste momento. Porém o Grok não tem um playGround avançado, logo, para usar a API do Grok é necessário utilizar uma ferramenta ou código externo, por exemplo: LLM Studio (<a href="https://lmstudio.ai/" target="_blank" rel="noreferrer">https://lmstudio.ai/</a>), JAM, GPT4ALL ou o excelente Msty app. Veja na <strong>Figura 5</strong> o Chatbot do Grok na <strong>Figura 6</strong> o Playground do Grok.</p><blockquote><p><strong>Figura 5</strong> - Chatbot do Grok <img src="https://github.com/user-attachments/assets/72a03f4b-5870-42f3-89d8-b7fd122c31ab" alt="image"> Fonte: <a href="https://tweetdelete.net/pt/recursos/grok-ai-xs-latest-artificial-intelligence-chatbot/" target="_blank" rel="noreferrer">tweetdelete</a></p></blockquote><blockquote><p><strong>Figura 6</strong> - Playground do Grok <img src="https://github.com/user-attachments/assets/306afcae-d203-4a87-ab11-8f03ce87df56" alt="image"> Fonte: o Autor</p></blockquote><h2 id="resumo" tabindex="-1">Resumo <a class="header-anchor" href="#resumo" aria-label="Permalink to &quot;Resumo&quot;">​</a></h2><p><strong>Groq</strong>:</p><ul><li><strong>Desenvolvedora</strong>: Groq Inc., fundada em 2016.</li><li><strong>Características</strong>: Destaca-se pela velocidade na geração de respostas factuais e citadas, produzindo centenas de palavras em menos de um segundo. Utiliza um chip ASIC personalizado, denominado Unidade de Processamento de Linguagem (LPU), que dispensa o uso de GPUs tradicionais, permitindo a geração de aproximadamente 500 tokens por segundo.</li><li><strong>Aplicações</strong>: Projetado para executar modelos de linguagem de grande porte (LLMs) e outras aplicações de IA generativa com alta eficiência e baixa latência.</li></ul><p><strong>Grok</strong>:</p><ul><li><strong>Desenvolvedora</strong>: xAI, empresa de inteligência artificial fundada por Elon Musk.</li><li><strong>Características</strong>: Descrito como um chatbot &quot;bem-humorado&quot;, com senso de humor sarcástico e politicamente incorreto, inspirado na série de livros &quot;Guia do Mochileiro das Galáxias&quot;. Integra-se diretamente à plataforma X (antigo Twitter), oferecendo respostas atualizadas em tempo real e contextualizadas com os trending topics e posts em alta na rede social.</li><li><strong>Aplicações</strong>: Voltado para interações informais e engajamento de usuários na plataforma X, fornecendo respostas rápidas e contextualizadas com o conteúdo da rede social.</li></ul><h2 id="principais-diferencas" tabindex="-1">Principais diferenças <a class="header-anchor" href="#principais-diferencas" aria-label="Permalink to &quot;Principais diferenças&quot;">​</a></h2><ul><li><strong>Desenvolvedora</strong>: Groq é da Groq Inc.; Grok é da xAI, de Elon Musk.</li><li><strong>Foco</strong>: Groq prioriza velocidade e eficiência em aplicações de IA generativa; Grok enfatiza interações informais com humor, integrando-se ao X.</li><li><strong>Tecnologia</strong>: Groq utiliza um chip ASIC personalizado (LPU) para processamento rápido; Grok baseia-se em modelos de linguagem com acesso em tempo real ao conteúdo do X.</li></ul><p>Apesar das semelhanças nos nomes, Groq e Grok são soluções de IA com propósitos e funcionalidades distintas, atendendo a diferentes necessidades no campo da inteligência artificial.</p><h2 id="referencias" tabindex="-1">Referências <a class="header-anchor" href="#referencias" aria-label="Permalink to &quot;Referências&quot;">​</a></h2><ul><li><a href="https://groq.com/" target="_blank" rel="noreferrer">https://groq.com/</a></li><li><a href="https://x.ai/" target="_blank" rel="noreferrer">https://x.ai/</a></li><li><a href="https://getstream.io/blog/best-local-llm-tools/" target="_blank" rel="noreferrer">https://getstream.io/blog/best-local-llm-tools/</a></li></ul>',25)),n(t,null,{default:i(()=>e[1]||(e[1]=[o(". . .")])),_:1}),a("p",null,[a("em",null,[n(t,null,{default:i(()=>e[2]||(e[2]=[o("Até o próximo artigo")])),_:1})])])])}const x=d(g,[["render",h]]);export{A as __pageData,x as default};