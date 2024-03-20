<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { supabase } from '@/supabase'

const personnes = ref()

const fetchFilms = async () => {
  let { data: personneData, error } = await supabase.from('personne').select('*')

  personnes.value = personneData
}

onMounted(fetchFilms)
</script>

<template>
  <div>
    <h1 class="font-bold text-xl mb-5 max-w-[30vh]">Retrouvez le casting de vos films préférés</h1>
    <div class="grid grid-cols-2 gap-10">
        <div v-for="personne in personnes" :key="personne.id" class="grid justify-center text-center">
          <RouterLink :to="`/celebrites/${personne.id}`">
            <h2 class="font-semibold text-lg mt-1">{{ personne.nom_personne }}</h2>
          </RouterLink>
        </div>
    </div>
  </div>
</template>
