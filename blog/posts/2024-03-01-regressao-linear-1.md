---
date: 2024-02-01
title: Regressão Linear (1#)
description: Uma introdução aos conceitos de regressão linear
category: Documentação
author: Giseldo Neo
sidebar: false
tags: 
    - regressão linear
    - aprendizagem de máquina
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<style>
    .profile {
      display: flex;
      align-items: center;
      gap: 15px;
      font-family: Arial, sans-serif;
    }

    .profile img {
      border-radius: 50%;
      width: 80px; /* Adjust size as needed */
      height: 80px; /* Adjust size as needed */
    }

    .profile-details {
      font-size: 14px;
    }

    .profile-details p {
      margin: 0;
    }
  </style>

  <hr class="solid">
  <div class="profile">
    <img src="./giseldo.png" alt="Profile Picture" />
    <div class="profile-details">
      <p>Giseldo Neo</p>
      <p>01/01/2024</p>
    </div>
  </div>
  <hr class="solid">

## Introdução

A Regressão linear é um método estatístico utilizado para avaliar a relação causal e quantitativa entre duas variáveis, chamada de variável dependente e variável independente, respectivamente. O modelo de regressão linear tem a seguinte forma: y = a + bx + e, onde y é a variável dependente, x é a variável independente, a é o intercepto, b é a reta inclinada e e é o erro. Com a regressão podemos encontrar um modelo matemático que melhor descreva a relação entre as variáveis (x) e (y).

### Características

1. Relação linear: A relação entre as variáveis é modelada como uma equação linear.
2. Variável dependente: y (ou resposta)
3. Variável(s) independente(s): x (ou preditor(es))
4. Coeficientes: Parâmetros que descrevem a relação entre x e y

### Tipos

1. Regressão linear simples: Uma variável independente.
2. Regressão linear múltipla: Mais de uma variável independente.

Equação da regressão linear:

y = β0 + β1x + ε

Onde:

- y: Variável dependente
- x: Variável independente
- β0: Intercepto (ou constante)
- β1: Coeficiente de regressão
- ε: Erro residual (ou ruído)

### Objetivos

1. Previsão: Prever valores de y com base em x.
2. Análise da relação: Entender como x afeta y.
3. Identificação de padrões: Detectar tendências e padrões nos dados.

### Pressupostos

1. Linearidade: Relação linear entre x e y.
2. Independência: Observações independentes.
3. Homocedasticidade: Variância constante dos resíduos.
4. Normalidade: Distribuição normal dos resíduos.
5. Não multicolinearidade: Variáveis independentes não correlacionadas.

### Métricas de avaliação

1. Coeficiente de determinação (R²)
2. Erro quadrático médio (MSE)
3. Raiz do erro quadrático médio (RMSE)

### Aplicações

1. Análise de dados
2. Previsão de vendas
3. Modelagem financeira
4. Análise de marketing
5. Pesquisa científica

### Limitações da regressão linear

1. Suposições rígidas
2. Sensibilidade a outliers
3. Não captura relações não lineares
4. Não considera interações entre variáveis

### Técnicas relacionadas

1. Regressão polinomial
2. Regressão logística

<center>. . .</center>

_<center>Até o próximo artigo</center>_