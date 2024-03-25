<script setup lang="ts">
import { useRouter } from 'vue-router'

import AddFilmForm from '@/components/AddFilmForm.vue'

const router = useRouter()

import { user } from '@/supabase'
// Gestion de la redirection si l'utilisateur n'est pas connecté
if (!user.value) {
    alert('Vous devez être connecté pour accéder à cette page !')
    router.push('/')
}
</script>
<template>
    <AddFilmForm />
</template>