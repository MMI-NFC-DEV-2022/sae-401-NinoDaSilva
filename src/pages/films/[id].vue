<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/supabase'

import clock from '@/components/icons/clock.vue';
import AffichageCelebrite from '@/components/AffichageCelebrite.vue';

const route = useRoute()
const router = useRouter()

// Import data from film
const { data:filmData, error } = await supabase.from('film')
  .select('*, plateforme_film(*, plateforme(*)), support_film(*), film_genre(*, genre(*))')
  .eq('id', route.params.id)
  .single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div>
    <div class="film_presentation lg:px-[5vh] xl:px-[10vh]">
      <div class="pr-10 md:pl-10">
        <h2 class="font-semibold text-2xl sm:text-4xl">{{ filmData.titre_film }}</h2>
        <div class="flex flex-wrap gap-1 mb-2">
          <div v-for="(unGenre, index) in filmData.film_genre" class="link gap-1 opacity-90">
            <RouterLink to="/films/">
                <template v-if="index !== 0"> - </template>
                {{ unGenre.genre.nom_genre }}
            </RouterLink>
          </div>
        </div>
        <p class="md:mt-3 max-w-[80vh] lg:text-lg">{{ filmData.synopsis_film }}</p>
        <div class="mt-3 md:mt-6">{{ filmData.date_sortie }}</div>
        <div class="flex items-center gap-1 mt-1 md:mt-2">
          <clock class="w-4 h-4" />
          <span>{{ filmData.duree_film }}</span>
        </div>
      </div>
      <img class="max-sm:mt-4 md:w-1/2 md:max-w-[50vh]" :src="filmData.affiche_film" alt="Film affiche image" />
    </div>

    <div class="mt-10">
      <h2 class="text-2xl font-semibold">Où regarder</h2>
      <div class="flex gap-2">
        <div v-for="unePlateforme in filmData.plateforme_film">
          <a :href="`${unePlateforme.lien_plateforme}`">
            <img :src="unePlateforme.plateforme.logo_plateforme" class="rounded-[20%] w-16" alt="Logo plateforme">
          </a>
        </div>
      </div>
    </div>

    <div class="bg-noir py-8 -mx-5 mt-10">
      <div class="mx-5 text-blanc">
        <h2 class="text-2xl font-semibold">Supports</h2>
        <div class="flex col-span-2 gap-5 mt-5">
          <div v-for="(unSupport, index) in filmData.support_film.slice(0, 2)">
            <RouterLink :to="`/supports/${unSupport.id}`">
              <img :src="unSupport.image_support" class="max-w-[300px] mx-auto"lt="Photo support">
              <div class="mt-2 text-center text-md">{{ unSupport.nom_support }}</div>
            </RouterLink>
          </div>
        </div>
        <RouterLink :to="`/supports/tousSupport/${filmData.id}`">
          <button class="bouton-main mt-8 mb-2 text-noir">Voir toutes les versions</button>
        </RouterLink>
      </div>
    </div>

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
