<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()

// const { data: personneData } = await supabase.from('personne').select('*').eq('id', route.params.id).single()

const { data:dataFilms, error } = await supabase.from('personne')
  .select('*, personne_film(*, film(*))')
  .eq('id', route.params.id)
  .single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div class="flex gap-5">
    <img :src="dataFilms.photo_personne" alt="Photo" class="max-sm:w-32 w-1/5 max-w-[30vh] rounded-lg">
    <div class="mt-1">
      <h1 class="font-bold text-2xl sm:text-4xl">{{ dataFilms.nom_personne }}</h1>
      <ul class="mt-3 space-y-1">
        <li>Date de naissance : {{ dataFilms.date_naissance }}</li>
        <li>Ville : {{ dataFilms.ville_naissance }}</li>
        <li>Nationnalité : {{ dataFilms.nationalite_personne }}</li>
      </ul>
    </div>
  </div>
  <div class="mt-5">
    <h2 class="font-bold text-xl">Biographie</h2>
    <div>{{ dataFilms.bio_personne }}</div>
  </div>
  
  <div>
    <h1 class="font-bold text-xl mt-10 mb-5">Filmographie</h1>
    <div class="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
      <div v-for="film in dataFilms.personne_film" :key="film.id" class="w-full justify-center text-center">
        <RouterLink :to="`/films/${film.film.id}`">
          <img :src="film.film.affiche_film" alt="Affiche du film" class="w-full object-cover" />
          <div class="carousel-content--title">
            <h2 class="carousel-title">{{ film.film.titre_film }}</h2>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
