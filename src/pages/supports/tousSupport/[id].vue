<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()

// Import data from film
const { data:filmData, error } = await supabase.from('film')
  .select('*, plateforme_film(*, plateforme(*)), support_film(*)')
  .eq('id', route.params.id)
  .single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
    <div>
        <div class="font-bold text-xl leading-tight mb-10">
            <h1>Support disponible pour le film</h1>
            <h2>▸ {{ filmData.titre_film }}</h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-none sm:flex sm:flex-wrap sm:gap-10">
            <div v-for="unSupport in filmData.support_film" class="max-sm:mx-auto max-sm:w-40 max-w-[300px]">
                <RouterLink :to="`/supports/${unSupport.id}`">
                    <img :src="unSupport.image_support" class="" alt="Logo plateforme">
                    <div class="mt-2 text-center text-md">{{ unSupport.nom_support }}</div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>