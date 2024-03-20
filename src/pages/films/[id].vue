<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

import clock from '@/components/icons/clock.vue';
import AffichageCelebrite from '@/components/AffichageCelebrite.vue';

const route = useRoute()

// Import data from film
const { data:filmData, error } = await supabase.from('film').select('*').eq('id', route.params.id).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}


// import { useRouter } from 'vue-router'

// const route = useRoute()

// // Import data from plateforme_film
// const { data:filmPlateforme } = await supabase.from('plateforme_film').select('*, plateform(*)').eq('film', route.params.id)

// // Import data from film_collection
// const { data:collectionFilm } = await supabase.from('film_collection').select('*, collection(*)').eq('film', route.params.id)

// // Import data from film_genre
// const { data:genreFilm } = await supabase.from('film_genre').select('*, genre(*)').eq('film', route.params.id)
</script>

<template>
  <div>
    <div class="film_presentation lg:px-[5vh] xl:px-[10vh]">
      <div class="pr-10 md:pl-10">
        <h2 class="font-semibold text-2xl sm:text-4xl">{{ filmData.titre_film }}</h2>
        <p class="md:mt-3 max-w-[80vh] lg:text-lg">{{ filmData.synopsis_film }}</p>
        <div class="mt-3 md:mt-6">{{ filmData.date_sortie }}</div>
        <div class="flex items-center gap-1 mt-1 md:mt-2">
          <clock class="w-4 h-4" />
          <span>{{ filmData.duree_film }}</span>
        </div>
      </div>
      <img class="max-sm:mt-4 md:w-1/2 md:max-w-[50vh]" :src="filmData.affiche_film" alt="Film affiche image" />
    </div>

    <!-- <div>
      <h2>Où regarder</h2>
      <div v-for="unePlateforme in filmPlateforme">
        <RouterLink :to="`/plateformes/${unePlateforme.id}`">
          <img :src="logo_plateforme" alt="Logo plateforme">
        </RouterLink>
      </div>
    </div> -->

    <AffichageCelebrite />

  </div>
</template>

<style scoped>
.film_presentation {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: start;
}
@media (min-width: 768px) {
  .film_presentation {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
