<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()
const plateformeId = route.params.id

const { data:plateformeData, error } = await supabase.from('plateforme').select('*').eq('id', plateformeId).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div>
    <h2 class="font-semibold text-2xl sm:text-4xl">{{ plateformeData.nom_plateforme }}</h2>

  </div>
</template>
