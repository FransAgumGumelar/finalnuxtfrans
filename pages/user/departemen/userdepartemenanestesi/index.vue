<template>
    <h2>User Departemen An3stesi</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/departemen/userdepartemenanestesi')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    