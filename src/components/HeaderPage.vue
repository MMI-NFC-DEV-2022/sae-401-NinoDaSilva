<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

import icon_user from '@/components/icons/icon_user.vue'

const menuIsOpen = ref(false)
function closeMenu() {
  menuIsOpen.value = false
}

const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
  dirTop.value = y < oldY
})
</script>

<template>
  <header
    :class="{
      '!-translate-y-full !bg-transparent': !dirTop,
      '!bg-white': underLimit
    }"
    class="bg-blanc fixed z-50 flex w-full translate-y-0 items-center justify-between px-6 py-2 transition-all duration-300 ease-in-out text-sm xl:text-lg"
  >
    <!-- <div>
      <RouterLink
        to="/connexion"
        @click="closeMenu"
        ><icon_user class="w-8 h-8"/>
      </RouterLink>
    </div> -->
  
    <div class="">
      <RouterLink to="/">
        <img src="/nema_logo.png" alt="logo" class="w-8">
      </RouterLink>
    </div>

    <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
      @click="menuIsOpen = !menuIsOpen"
    >
      <div class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ 'translate-y-[9px] rotate-45': menuIsOpen, '!bg-noir': underLimit }"
      ></div>
      <div class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ 'opacity-0': menuIsOpen, '!bg-noir': underLimit }"
      ></div>
      <div class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ '-translate-y-[9px] -rotate-45': menuIsOpen, '!bg-noir': underLimit }"
      ></div>
    </button>

    <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen text-center transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:items-center lg:tracking-wide lg:opacity-100 lg:bg-blanc"
      :class="{ '!visible opacity-100 bg-blanc mt-[15%]': menuIsOpen }"
    >
      <ul class="font-semibold mt-[16vh] max-sm:space-y-7 text-xl lg:m-0 lg:flex">
        <li>
          <RouterLink class="menu-link" to="/" @click="closeMenu">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink class="menu-link" to="/films" @click="closeMenu">Films</RouterLink>
        </li>
        <!-- <li>
          <RouterLink class="menu-link" to="/collections" @click="closeMenu">Collections</RouterLink>
        </li>
        <li>
          <RouterLink class="menu-link" to="/celebrites" @click="closeMenu">Célébrités</RouterLink>
        </li> -->
      </ul>
    </nav>

  </header>
</template>

<style scoped>
.menu-link {
  transition: all 0.3s;
}
.menu-link:hover {
  color: #f2c94c;
}
</style>
