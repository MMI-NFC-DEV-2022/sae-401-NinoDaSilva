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
    <h1 class="font-bold text-xl mb-5">Les films du moment</h1>
    <div class="grid grid-cols-2 gap-10">
        <div v-for="film in films" :key="film.id" class="grid justify-center text-center">
          <RouterLink :to="`/films/${film.id}`">
            <img
              :src="film.affiche_film"
              alt="Affiche du film"
              class="max-h-70 max-w-90 object-cover"
            />
            <h2 class="font-semibold text-lg mt-1">{{ film.titre_film }}</h2>
          </RouterLink>
        </div>
    </div>
  </div>
</template>
