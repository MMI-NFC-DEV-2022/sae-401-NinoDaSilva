<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { supabase } from '@/supabase'

const films = ref()

const fetchFilms = async () => {
  let { data: filmsData, error } = await supabase.from('film').select('*')

  films.value = filmsData
}

onMounted(fetchFilms)

const carousel = ref();
  const prevSlide = () => {
  const carouselWidth = carousel.value.offsetWidth;
  carousel.value.scrollLeft -= carouselWidth;
};

const nextSlide = () => {
  const carouselWidth = carousel.value.offsetWidth;
  carousel.value.scrollLeft += carouselWidth;
};
</script>

<template>
  <div>
    <h1 class="font-bold mb-5 text-3xl sm:text-4xl">Les films du moment</h1>
    <div class="carousel" ref="carousel">
      <button @click="prevSlide" class="bouton-carousel bouton-carousel--left max-sm:hidden">Précédent</button>
      <div class="carousel-parent-slide">
        <div class="carousel-slide" v-for="film in films" :key="film.id">
          <RouterLink :to="`/films/${film.id}`">
            <img :src="film.affiche_film" alt="Affiche du film" class="carousel-image" />
            <div class="carousel-content--title">
              <h2 class="carousel-title">{{ film.titre_film }}</h2>
            </div>
          </RouterLink>
        </div>
      </div>
      <button @click="nextSlide" class="bouton-carousel bouton-carousel--right max-sm:hidden">Suivant</button>
    </div>
  </div>
</template>
