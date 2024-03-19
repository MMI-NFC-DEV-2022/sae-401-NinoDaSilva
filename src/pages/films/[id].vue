<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

import clock from '@/components/icons/clock.vue';

const route = useRoute()
const filmId = route.params.id

const { data:filmData, error } = await supabase.from('film').select('*').eq('id', filmId).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
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

    <div>
      <h2>Où regarder</h2>
      <div>
        <img src="" alt="Logo plateforme">
      </div>
    </div>

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
