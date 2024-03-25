<script setup lang="ts">

</script>

<template>
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h1 class="mb-4 text-3xl font-bold tracking-tight">Erreur 404</h1>
      <p class="max-sm:mt-8 text-xl font-semibold text-orange">Oups !</p>
      <p class="mt-6 text-base md:text-lg">Désolé, nous n'avons pas trouvé la page que vous recherchez.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink to="/" class="rounded-lg bg-orange px-3.5 py-2.5 font-semibold shadow-sm hover:bg-noir duration-200">Retour à la page d'accueil</RouterLink>
      </div>
    </div>
  </main>
</template>