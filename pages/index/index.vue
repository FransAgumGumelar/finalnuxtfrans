<template>
  <H2> HALAMAN INDEX </H2>
  <pre>{{ data }}</pre>
  
</template>

<script setup lang="ts">
const { data } = await useFetch('http://localhost:5000/users/5')

</script>
