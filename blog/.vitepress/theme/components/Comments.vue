<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="giseldo/blog"
      data-repo-id="R_kgDONaUAxw"
      data-category="General"
      data-category-id="DIC_kwDONaUAx84ClDNp"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="en"
      data-theme="light"
      data-loading="lazy"
      async
    />
  </div>
</template>