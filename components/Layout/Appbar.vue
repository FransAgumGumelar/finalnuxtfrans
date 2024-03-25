<template>
    <!-- APP BAR -->
    <v-app-bar>
            <v-app-bar-nav-icon class="" @click="drawer1 = !drawer1" /> SATU RSSA
            <v-spacer />
            <v-app-bar-nav-icon icon="mdi-plus-circle" size="x-large" @click="drawer2 = !drawer2" />
        </v-app-bar>
</template>

<script setup>
  const drawer1 = ref(undefined || true);
  const drawer2 = ref(undefined || true);
</script>