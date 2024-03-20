<script setup lang="ts">
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';

const route = useRoute()
// Import data from personne_film
const { data:filmPersonne } = await supabase.from('personne_film').select('*, personne(*)').eq('film', route.params.id)

</script>

<template>
    <div class="mt-10">
        <h2 class="text-xl mb-4">Casting</h2>
        <div v-for="unePersonne in filmPersonne">
            <RouterLink :to="`/celebrites/${unePersonne.personne.id}`">
                <div class="text-md">{{ unePersonne.personne.nom_personne }}</div>
                <div class="opacity-80">{{ unePersonne.role }}</div>
            </RouterLink>
        </div>
    </div>
</template>