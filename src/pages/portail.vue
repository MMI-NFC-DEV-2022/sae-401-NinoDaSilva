<script setup lang="ts">
import { user, supabase } from '@/supabase'
import { useRouter } from 'vue-router'

// Redirige l'utilisateur vers la page de connexion si il n'est pas connecté
const router = useRouter()
if (!user) {
    router.push('/connexion')
}
</script>

<template>
    <div v-if="user" class="text-center">
        <h2 class="">Bonjour</h2>
        <div class="mt-6">
        <button @pointerdown="supabase.auth.signOut()"
            class="py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
            Déconnexion
        </button>
        </div>
    </div>
</template>