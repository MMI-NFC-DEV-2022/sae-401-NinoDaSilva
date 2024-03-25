<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';

const route = useRoute()
// Import data from personne_film
const { data: filmPersonne } = await supabase.from('personne_film').select('*, personne(*)').eq('film', route.params.id)

// Fonction de gestion du défilement du carousel
const carousel = ref();

const prevSlide = () => {
    if (!carousel.value) return
    const slideWidth = carousel.value.clientWidth
    carousel.value.scrollLeft -= slideWidth
}

const nextSlide = () => {
    if (!carousel.value) return
    const slideWidth = carousel.value.clientWidth
    carousel.value.scrollLeft += slideWidth
}
</script>

<template>
    <div class="mt-10 sm:mt-24">
        <h3 class="font-bold mb-5 text-xl sm:text-4xl">Casting</h3>
        <div class="carousel">
            <button @click="prevSlide" class="bouton-carousel bouton-carousel--left max-sm:hidden"
                aria-label="slide precedente">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    <g transform="rotate(-90 12 12)">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m17 14l-5-5m0 0l-5 5" />
                    </g>
                </svg>
            </button>
            <div class="carousel-parent-slide" ref="carousel">
                <div class="carousel-slide" v-for="Unepersonne in filmPersonne">
                    <RouterLink :to="`/celebrites/${Unepersonne.personne.id}`">
                        <img :src="Unepersonne.personne.photo_personne" alt="Affiche du personne"
                            class="carousel-image" />
                        <div class="carousel-content--title">
                            <h2 class="carousel-title">{{ Unepersonne.personne.nom_personne }}</h2>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <button @click="nextSlide" class="bouton-carousel bouton-carousel--right max-sm:hidden"
                aria-label="slide suivante">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    <g transform="rotate(90 12 12)">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m17 14l-5-5m0 0l-5 5" />
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>