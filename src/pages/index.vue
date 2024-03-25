<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import Arrow from '@/components/icons/Arrow.vue';

</script>

<template>
  <div>
    <h1 class="font-bold mt-[5%] text-2xl max-w-[40vh] sm:max-w-[70vh] sm:text-4xl">Découvrez <strong class="text-orange">une infinité de films</strong> dès maintenant !</h1>
    <div class="mt-10 sm:mt-[15%]">
      <FilmCard />
    </div>
    <div class="bg-noir text-blanc p-8 -mx-5 xl:-mx-20">
      <p>Rejoins la communauté dès maintenant !</p>
      <Arrow />
    </div>
  </div>
</template>