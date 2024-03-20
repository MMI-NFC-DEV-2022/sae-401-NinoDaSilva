<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()
const personneId = route.params.id

const { data:personneData, error } = await supabase.from('personne').select('*').eq('id', personneId).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div>
    <h2 class="font-semibold text-2xl sm:text-4xl">{{ personneData.nom_personne }}</h2>

  </div>
</template>

<style scoped>

</style>
