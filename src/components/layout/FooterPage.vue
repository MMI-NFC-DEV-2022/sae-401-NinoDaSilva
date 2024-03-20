<script setup lang="ts">

</script>

<template>
  <footer class="bg-noir text-blanc text-md py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="mb-4">
            <li>Département MMI</li>
            <li>4 Place Tharradin</li>
            <li>25200 Montbéliard</li>
            <li>France</li>
          </ul>
          <ul class="space-y-2">
            <a href="mailto:contact@gmail.com">contact@gmail.com</a>
            <li><a href="tel:0381994734">03 81 99 47 34</a></li>
          </ul>
        </div>
        <ul class="space-y-2">
          <h3 class="text-lg font-bold mb-4">Navigation</h3>
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/films">Films</RouterLink></li>
          <li><RouterLink to="/celebrites">Artistes</RouterLink></li>
        </ul>
        <ul class="space-y-2">
          <h3 class="text-lg font-bold mb-4">Mentions légales</h3>
          <li>Politique de confidentialité</li>
          <li>Conditions générales d'utilisation</li>
          <li>Mentions légales</li>
        </ul>
        <ul class="space-y-2">
          <h3 class="text-lg font-bold mb-4">A propos</h3>
          <li>Nous</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  </footer>
</template>