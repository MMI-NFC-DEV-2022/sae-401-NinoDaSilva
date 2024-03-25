<script setup lang="ts">
defineProps<{
    buttonText: string,
    stateToggle?: string
}>()

</script>   

<template>
    <div class="text-center mt-5">
        <button type="submit" @click="!stateToggle"
            class="py-2 px-10 rounded-xl shadow-md hover:scale-[1.02] bg-noir hover:bg-orange hover:text-noir text-blanc duration-300">
            {{ buttonText }}
        </button>
    </div>
</template>