<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comments from './components/Comments.vue'
const { Layout } = DefaultTheme
</script>

<style>

.profile {
  display: flex; 
  align-items: center;
  gap: 14px;
  font-family: Arial, sans-serif;
}
.profile img {
  border-radius: 50%;
  width: 60px; /* Adjust size as needed */
  height: 60px; /* Adjust size as needed */
}
.profile-details {
  font-size: 14px;
}
.profile-details p {
  margin: 0;
}

</style>

<template>
  
  <Layout>
    
    <template #doc-after>
  
      <div class="custom-layout">
      Se você está gostando da leitura, deixe um comentário ou curta esta postagem. Isso motiva os autores na criação de novos conteúdos. Caso queira receber semanalmente as últimas postagens por e-mail, assine nossa newsletter.
      </div>

      <div class="custom-layout">
      <SimpleNewsletter />
      </div>

      <center>. . .</center>

      <center>Até o próximo artigo</center>

      <Comments />
  
    </template>

<!-- <template #doc-before>
  
  <div class="profile">
  <div class="profile-details">
    {{ $frontmatter.date }}
  </div>
  </div>

  <div class="vp-doc">
  <h1>{{ $frontmatter.title }}</h1>
  </div>
  
  {{ $frontmatter.description }}

  <hr class="solid">
  <div class="profile">
    <img src="./giseldo.png" alt="Profile Picture" />
    <div class="profile-details">
      <p>Giseldo Neo</p>
      <p> <a href=http://x.com/giseldoneo>@giseldoneo</a> </p>
    </div>
  </div>
  <hr class="solid">

</template> -->

  </Layout>
</template>