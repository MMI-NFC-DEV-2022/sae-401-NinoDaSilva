<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'
import { ref } from 'vue'

const route = useRoute()

const { data: collectionData, error } = await supabase.from('collection').select('*, film_collection(*, film(*))').eq('id', route.params.id).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}

// Fonction de gestion du défilement du carousel
const carousel = ref();

const prevSlide = () => {
  if (!carousel.value) return
  const slideWidth = carousel.value.clientWidth
  carousel.value.scrollLeft -= slideWidth
}
const nextSlide = () => {
  if (!carousel.value) return
  const slideWidth = carousel.value.clientWidth
  carousel.value.scrollLeft += slideWidth
}
</script>

<template>
  <div>
    <h2 class="font-bold text-3xl sm:text-4xl">{{ collectionData.nom_collection }}</h2>

    <div class="carousel mt-5">
      <button @click="prevSlide" class="bouton-carousel bouton-carousel--left max-sm:hidden" aria-label="slide precedente">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5"/></g></svg>
      </button>
      <div class="carousel-parent-slide" ref="carousel">
        <div class="carousel-slide" v-for="film in collectionData.film_collection" :key="film.id">
          <RouterLink :to="`/films/${film.film.id}`">
            <img :src="film.film.affiche_film" alt="Affiche du film" class="carousel-image" />
            <div class="carousel-content--title">
              <h2 class="carousel-title">{{ film.film.titre_film }}</h2>
            </div>
          </RouterLink>
        </div>
      </div>
      <button @click="nextSlide" class="bouton-carousel bouton-carousel--right max-sm:hidden" aria-label="slide suivante">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5m0 0l-5 5"/></g></svg>
      </button>
    </div>
  </div>
</template>