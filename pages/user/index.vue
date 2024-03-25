<template>
  <h2>Index karyawan</h2>
  
  <pre>{{ data }}</pre>
    
  </template>
  
  <script setup lang="ts">
  const { data } = await useFetch('/api/user/karyawan/userrs')
  
  definePageMeta({
  layout: 'layouthewan'
})
  </script>
  