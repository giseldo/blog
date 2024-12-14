import{_ as h}from"./chunks/giseldo.CX2LeuZ1.js";import{_ as o,c as r,j as i,a,t as n,a2 as k,G as l,w as p,B as d,o as E}from"./chunks/framework.Cc2F01qG.js";const c="/blog/assets/exemplo1.C0JsOcKE.jpg",m="/blog/assets/exemplo2.DqjZ44wN.png",q=JSON.parse('{"title":"Streamlit (#1)","description":"Um introdução ao Streamlit, um framework de desenvolvimento rápido web para Python","frontmatter":{"date":"2024-01-01T00:00:00.000Z","title":"Streamlit (#1)","description":"Um introdução ao Streamlit, um framework de desenvolvimento rápido web para Python","category":"Documentação","author":"Giseldo Neo","sidebar":false,"tags":["Python","StreamLit","Web"]},"headers":[],"relativePath":"posts/2024-01-01-streamlit.md","filePath":"posts/2024-01-01-streamlit.md","lastUpdated":1734134821000}'),g={name:"posts/2024-01-01-streamlit.md"},u={id:"frontmatter-title",tabindex:"-1"};function y(t,s,F,C,v,b){const e=d("center");return E(),r("div",null,[i("h1",u,[a(n(t.$frontmatter.title)+" ",1),s[0]||(s[0]=i("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),i("p",null,n(t.$frontmatter.description),1),s[3]||(s[3]=k('<hr class="solid"><div class="profile"><img src="'+h+`" alt="Profile Picture"><div class="profile-details"><p>Giseldo Neo</p><p>01/01/2024</p></div></div><hr class="solid"><h2 id="introducao" tabindex="-1">Introdução <a class="header-anchor" href="#introducao" aria-label="Permalink to &quot;Introdução&quot;">​</a></h2><p>O <a href="https://streamlit.io/" target="_blank" rel="noreferrer">Streamlit</a> é uma biblioteca de código aberto em Python que facilita a criação de aplicativos web interativos e de visualização de dados de forma rápida e simples. É amplamente utilizada por cientistas de dados, analistas e desenvolvedores que desejam transformar seus scripts de Python em aplicações web interativas sem a necessidade de conhecimentos avançados em desenvolvimento web.</p><p>As principais características do Streamlit são:</p><ul><li><p>Facilidade de Uso: Permite criar interfaces de usuário com poucas linhas de código, utilizando uma sintaxe intuitiva e fácil de aprender.</p></li><li><p>Interatividade: Possibilita adicionar widgets interativos como sliders, botões, e caixas de seleção para que os usuários possam interagir com os dados e visualizar os resultados em tempo real.</p></li><li><p>Integração com Bibliotecas de Dados: Funciona bem com outras bibliotecas populares de Python como pandas, numpy, matplotlib, seaborn, entre outras, facilitando a visualização e manipulação de dados.</p></li><li><p>Atualização em Tempo Real: As mudanças nos scripts de Python são automaticamente refletidas na aplicação web, permitindo um desenvolvimento iterativo e rápido.</p></li><li><p>Desempenho: Otimizado para lidar com grandes volumes de dados e processamento intensivo, mantendo um desempenho adequado para aplicações complexas.</p></li></ul><h2 id="exemplos-de-uso" tabindex="-1">Exemplos de uso <a class="header-anchor" href="#exemplos-de-uso" aria-label="Permalink to &quot;Exemplos de uso&quot;">​</a></h2><p>Um simples exemplo com StreamLit:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> streamlit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Título da aplicação</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.title(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Meu Primeiro App com Streamlit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Carregar dados</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.DataFrame({</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Primeira Coluna&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Segunda Coluna&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Mostrar dados na tela</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.write(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Aqui estão os dados carregados:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.write(df)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Adicionar um slider</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">slider_val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st.slider(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Escolha um valor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.write(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Você escolheu: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">slider_val</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Para rodar a aplicação, você pode salvar o código em um arquivo Python (por exemplo, <code>app.py</code>) e executar o comando <code>streamlit run app.py</code> no terminal. Isso abrirá uma nova janela do navegador com sua aplicação interativa.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># executar no terminal</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> streamlit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app.py</span></span></code></pre></div><blockquote><p><strong>Figura 1</strong> - Exemplo StreamLit 1 <img src="`+c+`" alt="Streamlit exemplo 1"> Fonte: Giseldo Neo (2024)</p></blockquote><p>Mais um exemplo:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> streamlit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.title (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Título da aplicação&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.header(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Seção&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.subheader(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sub seção&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.markdown(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Texto simples em markdow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.caption(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Texto em fonte pequena&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.write(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Texto simples&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.code(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39; </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">import pandas as pd</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">df = pd.read_csv(&quot;myfile.csv&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">st.latex(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> Y = B_1X_1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">B_2X_2 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><blockquote><p><strong>Figura 2</strong> - Exemplo StreamLit 2 <img src="`+m+'" alt="Streamlit exemplo 2"> Fonte: O Autor (2024)</p></blockquote><h2 id="conclusao" tabindex="-1">Conclusão <a class="header-anchor" href="#conclusao" aria-label="Permalink to &quot;Conclusão&quot;">​</a></h2><p>Em resumo, o Streamlit é uma ferramenta poderosa para criar dashboards e visualizações de dados, permitindo compartilhar análises de forma interativa e acessível. Se você está procurando uma maneira rápida e eficiente de transformar suas análises de dados em aplicativos web, o Streamlit é uma excelente escolha.</p>',18)),l(e,null,{default:p(()=>s[1]||(s[1]=[a(". . .")])),_:1}),i("p",null,[i("em",null,[l(e,null,{default:p(()=>s[2]||(s[2]=[a("Até o próximo artigo")])),_:1})])])])}const x=o(g,[["render",y]]);export{q as __pageData,x as default};