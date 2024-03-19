<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()
const filmId = route.params.id
const film = ref(null)

const { data, error } = await supabase.from('film').select('*').eq('id', filmId).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
} else {
  film.value = data
}
</script>

<template>
  <div class="">
    <div v-if="film" class="relative w-full">
      <img
        :src="film.affiche_film"
        alt="Film cover image"
        class="h-[40vh] w-full object-cover object-center"
      />
      <h2 class="font-semibold text-xl">{{ film.titre_film }}</h2>
    </div>

  </div>
</template>
