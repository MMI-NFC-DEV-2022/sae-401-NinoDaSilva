<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import Arrow from '@/components/icons/Arrow.vue';
import CritiqueCard from '@/components/CritiqueCard.vue';

</script>

<template>
  <div>
    <h1 class="font-bold mt-[5%] text-2xl w-[40vh] sm:w-[80%] max-w-[1000px] sm:text-4xl lg:text-5xl">Découvrez <strong class="text-orange">une infinité de films</strong> dès maintenant !</h1>
    <div class="mt-10 sm:mt-[15%]">
      <FilmCard />
      <div class="grid mt-10 justify-center sm:justify-end md:mt-24">
        <RouterLink to="/films">
          <button class="py-3 px-14 sm:px-32 sm:py-4 sm:text-md md:mr-10 bg-noir text-blanc font-semibold rounded-lg shadow-md hover:scale-105 duration-300">Voir tous les films</button>
        </RouterLink>
      </div>
    </div>
    <div class="bg-noir text-blanc p-8 my-14 -mx-5 sm:px-[25%] sm:py-[5%] lg:my-[10%] xl:-mx-20">
      <div class="relative max-w-[1920px] mx-auto">
        <p class="text-2xl sm:text-4xl xl:text-5xl w-[30vh] sm:w-full max-w-[750px]">Rejoins la communauté dès maintenant !</p>
        <RouterLink to="/connexion">
          <Arrow class="absolute bottom-0 right-10 w-10 h-10 md:w-16 md:h-16"/>
        </RouterLink>
      </div>
    </div>

    <div>
      <h3 class="font-bold text-xl mb-6 sm:text-3xl">Critique populaire</h3>
      <CritiqueCard name="Xavier" jaime="52">
        <template #description>
          <p>Agneaux" (1991) : "Un thriller psychologique captivant qui vous emporte dans les tréfonds de l'esprit humain. 
            La performance éblouissante d'Anthony Hopkins en tant que Hannibal Lecter est tout simplement magistrale. Une exploration sombre et dérangeante de la psyché humaine, ce film ne manque pas de tenir en haleine jusqu'à la dernière seconde."
          </p>
        </template>
      </CritiqueCard>
      
    </div>
  </div>
</template>