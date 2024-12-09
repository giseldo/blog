import{_ as n,c as r,a2 as d,G as i,w as e,j as o,B as p,o as l,a as t}from"./chunks/framework.CDI8fxxe.js";const f=JSON.parse('{"title":"Aprendizagem de Máquina (#1)","description":"","frontmatter":{"title":"Aprendizagem de Máquina (#1)","editLink":true,"aside":true,"sidebar":false,"layout":"doc"},"headers":[],"relativePath":"posts/2024-02-01-am-1.md","filePath":"posts/2024-02-01-am-1.md"}'),h={name:"posts/2024-02-01-am-1.md"};function m(k,a,u,c,g,E){const s=p("center");return l(),r("div",null,[a[2]||(a[2]=d(`<h1 id="aprendizagem-de-maquina-1" tabindex="-1">Aprendizagem de máquina (#1) <a class="header-anchor" href="#aprendizagem-de-maquina-1" aria-label="Permalink to &quot;Aprendizagem de máquina (#1)&quot;">​</a></h1><p><em>01/02/2024</em></p><p><em>Por Giseldo Neo</em></p><h2 id="introducao" tabindex="-1">Introdução <a class="header-anchor" href="#introducao" aria-label="Permalink to &quot;Introdução&quot;">​</a></h2><p>A <strong>aprendizagem de máquina</strong> (ou <em>machine learning</em>) é uma subárea da inteligência artificial (IA) que permite que sistemas de computadores aprendam a partir de dados e façam previsões ou tomem decisões sem serem explicitamente programados para isso. Em vez de seguir instruções rígidas, os algoritmos de aprendizagem de máquina analisam grandes volumes de dados, identificam padrões e ajustam seus comportamentos com base nas informações adquiridas.</p><p>Ela foi motivada pelo desenvolvimento de softwares mais independentes da intervenção humana para extração do conhecimento. Geralmente aplicações de AM utilizam heurísticas que buscam por modelos capazes de representar o conhecimento existente nos dados.</p><h2 id="classificacao" tabindex="-1">Classificação <a class="header-anchor" href="#classificacao" aria-label="Permalink to &quot;Classificação&quot;">​</a></h2><p>As <strong>tarefas</strong> de aprendizado de máquina (<strong>Figura 1</strong>) podem ser divididas entre tarefas <strong>preditivas</strong>, que visam inferir o atributo alvo de uma nova entrada a partir da exposição prévia aos dados rotulados durante o treinamento do modelo, e <strong>descritivas</strong>, que buscam extrair padrões dos atributos preditivos.</p><p>Figura 1 - Tarefas de aprendizado de máquina</p><p>Fonte: o Autor (2024)</p><p>As tarefas preditivas analisam os <strong>atributos preditivos</strong>, comparando-os com os <strong>atributos alvo</strong> (também chamados de rótulos), enquanto tarefas descritivas utilizam os atributos preditivos para buscar por padrões e correlações entre si, além de não possuírem atributo alvo.</p><p>Ambas as tarefas podem ser categorizadas sob o conceito de <strong>aprendizado indutivo</strong> (<strong>Figura 2</strong>). Este é a capacidade de generalizar a partir de exemplos, neste caso o conjunto de dados de treinamento.</p><p><strong>Figura 2</strong> - Tarefas de aprendizado de máquina</p><p>Fonte: o Autor (2024)</p><p>Nas tarefas preditivas, os algoritmos poderão implementar tarefas de <strong>classificação</strong>, nas quais o atributo alvo é discreto, ou de <strong>regressão</strong>, em que o atributo alvo é contínuo. Já nas tarefas descritivas é possível realizar agrupamento, associação, ou sumarização, entre os atributos.</p><p>Podemos classificar ainda a aprendizagem de máquina em 3 grupos:</p><ul><li><p>Aprendizagem supervisionada: o sistema aprende a partir de um conjunto de dados rotulados, ou seja, onde as respostas corretas já são conhecidas. O objetivo é que, após o treinamento, ele consiga generalizar e fazer previsões para novos dados.</p></li><li><p>Aprendizagem não supervisionada: o sistema recebe dados sem rótulos, buscando padrões ou estruturas escondidas nos dados, como agrupamentos ou associações.</p></li><li><p>Aprendizagem por reforço: o algoritmo aprende a partir de interações com um ambiente, recebendo feedback positivo ou negativo conforme suas ações, com o objetivo de maximizar recompensas ao longo do tempo.</p></li></ul><h3 id="intuicao" tabindex="-1">Intuição <a class="header-anchor" href="#intuicao" aria-label="Permalink to &quot;Intuição&quot;">​</a></h3><p>Imagine que você quer que um sistema identifique fotos de cachorros e gatos. Em vez de definir manualmente o que diferencia um cachorro de um gato, você alimenta o sistema com milhares de imagens (de gatos e cachorros). Assim o programa irá &quot;aprender&quot; as características que melhor os distinguem.</p><h2 id="exemplo-de-uso-com-python" tabindex="-1">Exemplo de Uso com Python <a class="header-anchor" href="#exemplo-de-uso-com-python" aria-label="Permalink to &quot;Exemplo de Uso com Python&quot;">​</a></h2><p>A aprendizagem de máquina tem aplicações em diversas áreas, como reconhecimento de fala, diagnósticos médicos, recomendação de produtos e veículos autônomos, e é uma tecnologia fundamental para a evolução de soluções baseadas em IA. A cada dia, ela se torna mais presente em nosso cotidiano, impulsionando inovações e transformando indústrias.</p><p>Essa evolução, porém, vem acompanhada de desafios éticos, como a transparência das decisões tomadas por algoritmos e a proteção de dados pessoais, o que torna o tema ainda mais relevante para o futuro da tecnologia.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sklearn.tree </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DecisionTreeClassifier</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DecisionTreeClassifier()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">clf.fit(X, y)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Resultado:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, clf.predict([[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]))</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Resultado:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [1]</span></span></code></pre></div>`,24)),i(s,null,{default:e(()=>a[0]||(a[0]=[t(". . .")])),_:1}),o("p",null,[o("em",null,[i(s,null,{default:e(()=>a[1]||(a[1]=[t("Até o próximo artigo")])),_:1})])])])}const v=n(h,[["render",m]]);export{f as __pageData,v as default};
