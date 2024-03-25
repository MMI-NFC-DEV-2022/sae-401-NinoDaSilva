<script setup lang="ts">
defineProps<{
    buttonText: string,
    stateToggle?: string
}>()

</script>   

<template>
    <div class="text-center mt-5">
        <button type="submit" @click="!stateToggle"
            class="py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
            {{ buttonText }}
        </button>
    </div>
</template>