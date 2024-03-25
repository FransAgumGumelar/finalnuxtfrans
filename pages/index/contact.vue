<template>
  HALAMAN CONTACT
  <pre>{{ data }}</pre>
  
</template>

<script setup lang="ts">
const { data } = await useFetch('http://localhost:5000/users/4')

</script>
