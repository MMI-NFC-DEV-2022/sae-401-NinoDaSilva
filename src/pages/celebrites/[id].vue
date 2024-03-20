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
    <img :src="dataFilms.photo_personne" alt="Photo" class="w-32 rounded-lg">
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
    <h1 class="font-bold text-xl mb-5">Les films du moment</h1>
    <div class="grid grid-cols-2 gap-10">
      <div v-for="film in dataFilms.personne_film" :key="film.id" class="grid justify-center text-center">
        <RouterLink :to="`/films/${film.film.id}`">
          <img :src="film.film.affiche_film" alt="Affiche du film" class="max-h-70 max-w-90 object-cover" />
          <h2 class="font-semibold text-lg mt-1">{{ film.film.titre_film }}</h2>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
