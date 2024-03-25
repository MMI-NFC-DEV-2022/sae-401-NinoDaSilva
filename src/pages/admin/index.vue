<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

import { user } from '@/supabase'
// Gestion de la redirection si l'utilisateur n'est pas connecté
if (!user.value) {
    alert('Vous devez être connecté pour accéder à cette page !')
    router.push('/')
}
</script>
<template>
    <h1 class="text-xl font-bold mb-5">Portail administrateur</h1>
    <div class="flex space-x-4">
        <RouterLink to="/admin/addfilm" class="font-bold py-2 px-4 rounded link">Ajout d'un film</RouterLink>
    </div>
</template>