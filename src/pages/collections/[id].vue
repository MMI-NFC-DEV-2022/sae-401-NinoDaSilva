<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()
const collectionId = route.params.id

const { data:collectionData, error } = await supabase.from('collection').select('*').eq('id', collectionId).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div>
    <h2 class="font-semibold text-2xl sm:text-4xl">{{ collectionData.nom_collection }}</h2>

  </div>
</template>