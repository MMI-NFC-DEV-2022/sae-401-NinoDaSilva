<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import Arrow from '@/components/icons/Arrow.vue';

</script>

<template>
  <div>
    <h1 class="font-bold mt-[5%] text-2xl w-[40vh] sm:w-[80%] max-w-[1000px] sm:text-4xl lg:text-5xl">Découvrez <strong class="text-orange">une infinité de films</strong> dès maintenant !</h1>
    <div class="mt-10 sm:mt-[15%]">
      <FilmCard />
    </div>
    <div class="bg-noir text-blanc p-8 my-14 -mx-5 sm:px-[25%] sm:py-[5%] xl:-mx-20">
      <div class="relative max-w-[1920px] mx-auto">
        <p class="text-2xl sm:text-4xl xl:text-5xl w-[30vh] sm:w-full max-w-[750px]">Rejoins la communauté dès maintenant !</p>
        <RouterLink to="/connexion">
          <Arrow class="absolute bottom-0 right-10 w-10 h-10 md:w-16 md:h-16"/>
        </RouterLink>
      </div>
    </div>
  </div>
</template>