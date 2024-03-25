<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase, user } from '@/supabase'
import type { Database } from '@/supabase-types';

const router = useRouter()
const props = defineProps<{ data?: Database['public']['Tables']['film']; id?: string }>()
const UnFilmCreation = ref<Database['public']['Tables']['film']>(props.data ?? {})

UnFilmCreation.value.id_user = user.value?.id

async function upsertFilm() {
    if (UnFilmCreation.value) return
    const { data, error } = await supabase.from('film').upsert(UnFilmCreation.value)
    if (error) {
        console.error('Erreur lors de la mise à jour:', error.message)
    } else {
        router.push('/')
    }
}
</script>

<template>
    <h1 class="font-bold text-xl mb-5">Ajout d'un film</h1>
    <FormKit type="form" v-model="UnFilmCreation" @submit="upsertFilm" class="space-y-4">
        <FormKit id="Titre" name="Titre" label="Titre" validation="required" placeholder="Nom du film" class="w-full" />
        <FormKit id="Synopsis" name="Synopsis" type="textarea" label="Synopsis" validation="required" placeholder="Entrez le synopsis du film" class="w-full" />
        <FormKit id="DateSortie" name="DateSortie" type="date" label="Date de sortie" validation="required" placeholder="Sélectionnez la date de sortie" class="w-full" />
        <FormKit id="Durée" name="Durée" type="text" label="Durée" validation="required" placeholder="Entrez le synopsis du film" class="w-full" />
    
    </FormKit>
</template>