<script setup lang="ts">
import {useRoute} from "vue-router"
import EditFilms from "../../../components/EditFilms.vue";
const route = useRoute("/films/edit/[id]")
</script>
<template>
  <EditFilms :id="route.params.id" />
</template>