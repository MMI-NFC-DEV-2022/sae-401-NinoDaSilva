<script setup lang="ts">
import { user, supabase } from '@/supabase'
import { useRouter } from 'vue-router'

// Fonction de déconnexion
const doLogout = async () => {
    try {
        await supabase.auth.signOut()
        router.push('/connexion') // Rediriger l'utilisateur vers la page de connexion après la déconnexion
    } catch (error) {
        console.error("Une erreur est survenue lors de la déconnexion :", error)
    }
}

// Redirige l'utilisateur vers la page de connexion si il n'est pas connecté
const router = useRouter()
if (!user.value) {
    router.push('/connexion')
}
</script>

<template>
    <div class="text-center">
        <h2 class="">Bonjour {{ user?.email }}</h2>
        <div class="mt-6">
        <button @click="doLogout"
            class="py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
            Déconnexion
        </button>
        </div>
    </div>
</template>