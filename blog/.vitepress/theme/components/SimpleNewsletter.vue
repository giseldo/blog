<template>
    <Popup />
    <form class="newsletter" @submit.prevent="onSubmit">
      <slot :slotProps="slotProps">
        <div class="newsletter__wrap">
          <div class="newsletter__title">{{ slotProps.title }}</div>
          <div class="newsletter__content">{{ slotProps.content }}</div>
          <input
            v-model="slotProps.mail"
            class="newsletter__input"
            type="email"
            name="email"
            aria-label="Email"
            placeholder="Email"
            required
            autocapitalize="off"
            autocorrect="off"
            data-cy="email"
          />
          <button type="submit" class="newsletter__button" data-cy="submit">
            {{ slotProps.submitText }}
          </button>
        </div>
      </slot>
    </form>
  </template>
  
  <script setup>
  import jsonp from 'jsonp'
  import { provide, ref } from 'vue'
  import { useNewsletterStore } from '../store/NewsletterStore'
   
  function addToMailchimp(email, fields) {
    const endpoint =
      'https://github.us7.list-manage.com/subscribe/post?u=25934a41d3812d528ee9e9527&amp;id=348b119028&amp;f_id=008ec3e4f0'
    const emailEncoded = encodeURIComponent(email)
    let url = endpoint.replace(/\/post/g, '/post-json')
    const listFields = fields ? '&' + queryString.stringify(fields) : ''
    const queryParams = `&EMAIL=${emailEncoded}${listFields}`
    url = `${url}${queryParams}`
  
    return new Promise((resolve, reject) =>
      jsonp(url, { param: 'c', timeout: 3500 }, (err, data) => {
        if (err) {
          console.log('Request failed', err)
          newsletterStore.setSuccess(false)
          reject(err)
        }
        if (data) {
          console.log('Request success', data)
          newsletterStore.setSuccess(true)
          resolve(data)
        }
      })
    )
  }
  
  const newsletterStore = useNewsletterStore()
  
  const slotProps = ref({
    mail: '',
    title: 'Newsletter',
    content: 'Inscreva-se na nossa newsletter semanal. Sem spam.',
    submitText: 'Inscreva-se',
  })
  
  const onSubmit = () => {
    addToMailchimp(slotProps.value.mail)
      .catch(err => {
        newsletterStore.setSuccess(false)
        slotProps.value.mail = ''
      })
      .then(res => {
        slotProps.value.mail = ''
        newsletterStore.setSubmit(true)
      })
  }
  </script>
  
  <style>
  .newsletter {
    text-align: center;
    width: 100%;
    font-size: 1rem;
    color: #2c3e50;
  }
  
  .newsletter__wrap {
    margin: 1.5rem auto;
    padding: 1.8rem 2.3rem;
    border-radius: 3px;
    box-sizing: border-box;
    max-width: 420px;
    background: #f8f8f8;
  }
  
  .newsletter__title {
    font-size: 1.7rem;
  }
  
  .newsletter__content {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.7rem;
  }
  
  .newsletter__input {
    font-size: inherit;
    border: 1px solid #eaecef;
    background: white;
    width: 100%;
    padding: 0.6rem 1.2rem;
    box-sizing: border-box;
    border-radius: 3px;
    margin-bottom: 0.8rem;
    outline: none;
  }
  
  .newsletter__button {
    font-size: inherit;
    border: none;
    cursor: pointer;
    background: #4979ff !important;
    color: #fff;
    padding: 0.6rem 1.8rem;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    outline: none;
  }
  </style>
  