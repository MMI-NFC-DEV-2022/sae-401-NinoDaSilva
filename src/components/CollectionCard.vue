<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { supabase } from '@/supabase'

const collections = ref()

const fetchFilms = async () => {
  let { data: collectionData, error } = await supabase.from('collection').select('*')

  collections.value = collectionData
}

onMounted(fetchFilms)
</script>

<template>
  <div>
    <h1 class="font-bold text-xl mb-5 max-w-[30vh]">Retrouvez les sagas de vos films préférés</h1>
    <div class="grid grid-cols-2 gap-10">
        <div v-for="collection in collections" :key="collection.id" class="grid justify-center text-center">
          <RouterLink :to="`/collections/${collection.id}`">
            <h2 class="font-semibold text-lg mt-1">{{ collection.nom_collection }}</h2>
          </RouterLink>
        </div>
    </div>
  </div>
</template>
