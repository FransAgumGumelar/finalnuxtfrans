<template>
    <h2>Index Detail Karyawan</h2>
    
    <pre>{{ data }}</pre>
      
    </template>
    
    <script setup lang="ts">
    const { data } = await useFetch('/api/user/karyawan/detailkaryawan')
    
    definePageMeta({
    layout: 'layouthewan'
  })
    </script>
    