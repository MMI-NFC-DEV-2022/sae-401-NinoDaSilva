<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

</script>

<template>
  <HeaderPage />

  <Suspense>
    <RouterView />
  </Suspense>

  <FooterPage />
</template>