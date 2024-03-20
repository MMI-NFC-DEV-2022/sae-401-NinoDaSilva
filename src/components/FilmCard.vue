<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { supabase } from '@/supabase'

const films = ref()

const fetchFilms = async () => {
  let { data: filmsData, error } = await supabase.from('film').select('*')

  films.value = filmsData
}

onMounted(fetchFilms)
</script>

<template>
  <div>
    <h1 class="font-bold mb-5 text-3xl sm:text-4xl">Les films du moment</h1>
    <div class="carousel">
      <div class="carousel-inner">
          <div v-for="film in films" :key="film.id" class="carousel-item">
            <RouterLink :to="`/films/${film.id}`">
              <img
                :src="film.affiche_film"
                alt="Affiche du film"
                class="carousel-image"
              />
              <h2 class="carousel-title">{{ film.titre_film }}</h2>
            </RouterLink>
          </div>
      </div>
    </div>
  </div>
</template>
