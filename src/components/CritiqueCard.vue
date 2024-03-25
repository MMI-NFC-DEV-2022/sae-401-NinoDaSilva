<script setup lang="ts">
defineProps<{
    name: string,
    jaime?: string
}>()
</script>
<template>
    <div>
        <div class="text-lg mb-2 sm:text-2xl">{{ name }}</div>
        <div class="max-w-[1000px]">
            <slot name="description"></slot>
        </div>
        <div class="font-semibold mt-2 sm:mt-3">{{ jaime }} J'aimes</div>
    </div>
</template>