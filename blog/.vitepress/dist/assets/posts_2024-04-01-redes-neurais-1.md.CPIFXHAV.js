import{_ as t,c as n,a2 as d,G as o,w as r,j as s,B as m,o as u,a as i}from"./chunks/framework.DzmM640o.js";const q=JSON.parse('{"title":"Redes Neurais Primeiro Contato","description":"","frontmatter":{"title":"Redes Neurais Primeiro Contato","tags":["redes neurais","ia"],"editLink":true,"aside":true,"sidebar":false,"layout":"doc","prev":true,"next":true},"headers":[],"relativePath":"posts/2024-04-01-redes-neurais-1.md","filePath":"posts/2024-04-01-redes-neurais-1.md"}'),p={name:"posts/2024-04-01-redes-neurais-1.md"};function l(c,e,g,f,h,v){const a=m("center");return u(),n("div",null,[e[2]||(e[2]=d('<h1 id="redes-neurais-1" tabindex="-1">Redes Neurais (#1) <a class="header-anchor" href="#redes-neurais-1" aria-label="Permalink to &quot;Redes Neurais (#1)&quot;">​</a></h1><p><em>01/03/2024</em></p><p><em>Por Giseldo Neo</em></p><h2 id="introducao" tabindex="-1">Introdução <a class="header-anchor" href="#introducao" aria-label="Permalink to &quot;Introdução&quot;">​</a></h2><p>As <strong>redes neurais</strong> são utilizadas em diversas aplicações. De forma resumida elas são compostas por diversos nós interconectados e organizados em camadas. Elas funcionam como um meio de aprendizado a partir da análise de exemplos de treinamento, permitindo a realização de tarefas complexas. Sendo Redes Neurais uma sub-área da aprendizagem de máquina, grande parte dos conceitos de aprendizagem de máquina são equivalentes na aplicação de uma rede neural. Veja na <strong>Figura 1</strong> um simples esquema dos conceitos.</p><p><strong>Figura 1</strong> - Sub-áreas da Inteligência Artificial</p><p>Fonte: O Autor (2024)</p><h2 id="previsao" tabindex="-1">Previsão <a class="header-anchor" href="#previsao" aria-label="Permalink to &quot;Previsão&quot;">​</a></h2><p>Realizar uma <strong>previsão</strong>, no contexto da inteligência artificial, significa utilizar um modelo para estimar ou inferir um valor futuro ou desconhecido. A previsão é baseada em padrões identificados em dados passados ou exemplos conhecidos, e o objetivo é fornecer uma estimativa ou decisão sobre novos dados ou eventos futuros. A precisão da previsão depende da qualidade dos dados, do modelo utilizado e de quão bem o modelo foi treinado e ajustado.</p><p>Por exemplo, ao treinar um modelo preditivo com imagens de gatos e cachorros, o modelo pode, posteriormente, prever se uma nova imagem contém um gato ou um cachorro, mesmo sem ter visto uma nova imagem específica antes. Veja na <strong>Figura 2</strong> a imagem de um gato e na <strong>Figura 3</strong> um cahorro. Um modelo preditivo poderá dar um chute técnico se a foto contem um gato ou um cachorro, nesse caso é bem simples, mas existem fotos mais difícieis de identificar, tanto para um modelo quanto para o ser humano.</p><p><strong>Figura 2</strong> - Um gato</p><p>Fonte: Imagem de <a href="https://pixabay.com/pt/users/ty_swartz-617282/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=551554">Ty Swartz</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=551554">Pixabay</a></p><p><strong>Figura 3</strong> - Um cachorro</p><p>Fonte: Imagem de <a href="https://pixabay.com/pt/users/vlaaitje-1637107/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1047521">Ilona Krijgsman</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1047521">Pixabay</a></p><p>Com uma rede Neural podemos realizar uma previsão. Cabe ressaltar que também podemos realizar previsão com Regressão Linear ou outras técnicas.</p><h2 id="rede-neural" tabindex="-1">Rede Neural <a class="header-anchor" href="#rede-neural" aria-label="Permalink to &quot;Rede Neural&quot;">​</a></h2><p>Um modelo preditivo é treinado com dados históricos. Com uma rede neural não é diferente. Os dados fornecidos a uma rede neural variam de acordo com o caso de uso. Em um sistema de reconhecimento de objetos, por exemplo, a rede pode ser alimentada com milhares de imagens rotuladas de gatos, cachorros, carros, casas e outros objetos.</p><p>Muitas das redes neurais seguem um padrão conhecido como <strong>feed-forward</strong>, em que os dados são sempre processados na mesma direção, sem retornos aos nós anteriores. Cada nó na rede recebe entradas, que são multiplicadas por <strong>pesos</strong> específicos e ajustadas por um valor adicional chamado <strong>bias</strong>, que pode ser ajustado durante o treinamento. O resultado desse cálculo é submetido a uma <strong>função de ativação</strong>, como a <strong>ReLU</strong>, que introduz não-linearidade ao modelo, permitindo uma maior flexibilidade na tomada de decisões.</p><p>Durante o treinamento, os <strong>pesos</strong> e as <strong>biases</strong> são inicialmente configurados com valores aleatórios e, com base nos resultados das saídas, esses parâmetros são ajustados para melhorar o desempenho da rede. Esse processo continua até que a rede alcance uma perda (erro) suficientemente baixa, garantindo consistência nos resultados. A perda é uma métrica que quantifica o quão distante a saída da rede está do resultado correto.</p><h2 id="linha-do-tempo" tabindex="-1">Linha do tempo <a class="header-anchor" href="#linha-do-tempo" aria-label="Permalink to &quot;Linha do tempo&quot;">​</a></h2><p>Á seguir uma linha do tempo resumida destancando os principais avanços em redes neurais.</p><ul><li><p>1943 - Modelo de Neurônio Artificial (McCulloch e Pitts): Warren McCulloch e Walter Pitts propuseram o primeiro modelo matemático de um neurônio, baseando-se no funcionamento dos neurônios biológicos.</p></li><li><p>1958 - Perceptron (Frank Rosenblatt): Frank Rosenblatt desenvolveu o perceptron, uma das primeiras redes neurais artificiais. Esse modelo é capaz de aprender pesos a partir de dados de entrada e foi visto como um avanço na época.</p></li><li><p>1969 - Crítica ao Perceptron (Minsky e Papert): Marvin Minsky e Seymour Papert publicaram o livro Perceptrons, que destacava as limitações do perceptron, especialmente a incapacidade de resolver problemas linearmente inseparáveis. Isso resultou em um declínio no interesse pelas redes neurais por alguns anos.</p></li><li><p>1986 - Backpropagation e Renascimento das Redes Neurais: A redescoberta do algoritmo de backpropagation por Geoffrey Hinton, David Rumelhart e Ronald Williams marcou um novo renascimento no campo das redes neurais. Esse algoritmo permitiu a atualização eficiente dos pesos em redes de múltiplas camadas (deep learning), resolvendo limitações anteriores.</p></li><li><p>1990s - Redes Neurais Convolucionais (Yann LeCun): Yann LeCun introduziu as redes neurais convolucionais (CNNs), que mostraram grande eficácia em tarefas de reconhecimento de padrões, especialmente em imagens.</p></li><li><p>1997 - LSTMs (Hochreiter e Schmidhuber): Sepp Hochreiter e Jürgen Schmidhuber desenvolveram as Long Short-Term Memory (LSTM), um tipo de rede neural recorrente que consegue lidar melhor com dados sequenciais e dependências de longo prazo, superando limitações das redes recorrentes tradicionais.</p></li><li><p>2006 - Aprendizado Profundo (Deep Learning): Geoffrey Hinton e colaboradores publicaram trabalhos que mostravam como redes neurais profundas poderiam ser treinadas de forma eficaz usando novas técnicas, o que marcou a ascensão do deep learning.</p></li><li><p>2012 - AlexNet e Revolução no Reconhecimento de Imagens: A rede AlexNet, desenvolvida por Alex Krizhevsky e Geoffrey Hinton, venceu a competição ImageNet, demonstrando o poder do deep learning em reconhecimento de imagens e levando a um aumento no interesse e na aplicação comercial das redes neurais profundas.</p></li><li><p>2014 - Redes Gerativas Adversárias (GANs): Ian Goodfellow e colegas introduziram as redes gerativas adversárias (GANs), uma inovação que permitiu a criação de modelos gerativos poderosos, usados para gerar imagens, vídeos e outros tipos de dados.</p></li><li><p>2020 - Transformers e Aprendizado de Linguagem: O modelo Transformer, introduzido em 2017 por Vaswani e outros, revolucionou o processamento de linguagem natural, culminando no desenvolvimento de modelos como o GPT, BERT, entre outros, que são amplamente utilizados para tarefas de geração e compreensão de texto.</p></li></ul><p>Curtiu? Deixei um comentário. Até o próximo post.</p><h2 id="referencias" tabindex="-1">Referências <a class="header-anchor" href="#referencias" aria-label="Permalink to &quot;Referências&quot;">​</a></h2><p>-<a href="https://www.aibutsimple.com/p/neural-networks-explained" target="_blank" rel="noreferrer">Ai but simple Issue #1</a></p>',25)),o(a,null,{default:r(()=>e[0]||(e[0]=[i(". . .")])),_:1}),s("p",null,[s("em",null,[o(a,null,{default:r(()=>e[1]||(e[1]=[i("Até o próximo artigo")])),_:1})])])])}const x=t(p,[["render",l]]);export{q as __pageData,x as default};