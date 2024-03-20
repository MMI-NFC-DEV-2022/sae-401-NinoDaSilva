<script setup lang="ts">
import { defineProps} from 'vue'

defineProps({
    buttonText: String,
    stateToggle: String
})

</script>   

<template>
    <button type="submit" @click="!stateToggle"
        class="py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
        {{ buttonText }}
    </button>
</template>