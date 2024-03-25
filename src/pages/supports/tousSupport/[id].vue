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
        <h1>Support</h1>
        <div class="flex col-span-2 gap-5">
            <div v-for="unSupport in filmData.support_film">
                <RouterLink :to="`/supports/${unSupport.id}`">
                    <img :src="unSupport.image_support" class="" alt="Logo plateforme">
                    <div class="mt-2 text-center text-md">{{ unSupport.nom_support }}</div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>