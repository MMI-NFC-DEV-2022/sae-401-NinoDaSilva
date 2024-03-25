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
    <h1 class="font-bold text-xl mb-5 max-md:max-w-[30vh] md:text-3xl md:mb-10">Retrouvez les sagas de vos films préférés</h1>
    <div class="grid grid-cols-2 gap-3 sm:gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div v-for="collection in collections" :key="collection.id" class="grid justify-center text-center border-2 rounded-md overflow-hidden p-3 duration-300 hover:border-orange hover:scale-105 hover:bg-orange hover:bg-opacity-80">
          <RouterLink :to="`/collections/${collection.id}`">
            <h2 class="font-semibold text-lg mb-1">{{ collection.nom_collection }}</h2>
            <img :src="collection.image_collection" class="w-full h-full max-w-[200px] max-h-[150px] mx-auto" alt="Image collection">
          </RouterLink>
        </div>
    </div>
  </div>
</template>
