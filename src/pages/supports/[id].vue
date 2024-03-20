<script setup lang="ts">
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()

const { data:supportData, error } = await supabase.from('support_film').select('*').eq('id', route.params.id).single()

if (error) {
  console.error('Erreur lors du chargement des données :', error)
}
</script>

<template>
  <div class="flex gap-4">
    <img :src="supportData.image_support" alt="Photo" class="max-w-36">
    <div>
      <h2 class="mt-1 font-semibold text-2xl sm:text-4xl leading-7">{{ supportData.nom_support }}</h2>
      <ul class="mt-2 space-y-1">
        <li class="font-semibold">{{ supportData.type_support }}</li>
        <li class="opacity-90">Codec : {{ supportData.codec_support }}</li>
        <li class="opacity-90">Résolution : {{ supportData.resolution_support }}</li>
        <li class="opacity-90">Aspect ratio : {{ supportData.ratio_support }}</li>
      </ul>
    </div>
  </div>
</template>
