<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()
const supportId = route.params.id

const { data:supportData, error } = await supabase.from('support').select('*').eq('id', supportId).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div>
    <h2 class="font-semibold text-2xl sm:text-4xl">{{ supportData.nom_support }}</h2>

  </div>
</template>
