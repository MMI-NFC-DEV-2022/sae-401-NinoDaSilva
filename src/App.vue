<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './components/layout/HeaderPage.vue';
import FooterPage from './components/layout/FooterPage.vue';

</script>

<template>
  <HeaderPage />

  <div class="py-20 pt-24 px-5 xl:px-20 xl:pb-40 xl:pt-32">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>

  <FooterPage />
</template>