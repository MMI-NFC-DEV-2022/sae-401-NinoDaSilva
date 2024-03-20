<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()

const { data: collectionData, error } = await supabase.from('collection').select('*, film_collection(*, film(*))').eq('id', route.params.id).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div>
    <h2 class="font-bold text-3xl sm:text-4xl">{{ collectionData.nom_collection }}</h2>

    <div class="carousel">
      <div class="carousel-inner">
        <div v-for="film in collectionData.film_collection" :key="film.id" class="carousel-item">
          <RouterLink :to="`/films/${film.film.id}`">
            <img :src="film.film.affiche_film" alt="Affiche du film" class="carousel-image" />
            <h2 class="carousel-title">{{ film.film.titre_film }}</h2>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>