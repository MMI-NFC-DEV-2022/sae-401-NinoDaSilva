<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'

const currentUser = ref(false)
const loginMode = ref(true)
const email = ref('')
const password = ref('')

// Fonction de connexion
const doLogin = async () => {
  try {
    let { user, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
  } catch (error) {
    alert(error.message)
  }
}
// Fonction de création de compte
const doCreateAccount = async () => {
  try {
    let { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    currentUser.value = true // On met à jour la variable currentUser
  } catch (error) {
    alert(error.message)
  }
}
// Fonction de déconnexion
const doLogout = async () => {
    try {
        let { error } = await supabase.auth.signOut()

        currentUser.value = false // On met à jour la variable currentUser
    } catch (error) {
        alert(error.message)
    }
}
</script>

<template>
  <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-10 mt-4 sm:mt-8">
    <div v-if="currentUser" class="text-center">
      <h2 class="">Bonjour {{ currentUser?.name }}</h2>
      <div class="mt-6">
        <button
          type="button"
          @click="doLogout"
          class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300"
        >
          Déconnexion
        </button>
      </div>
    </div>

    <div v-else>
      <h2 class="text-center text-xl mb-10">{{ loginMode ? 'CONNEXION' : 'INSCRIPTION' }}</h2>
      <div class="sm:col-span-2 sm:col-start-1 mt-4">
        <label for="email">Mail</label>
        <div class="mt-2">
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            placeholder="Votre adresse mail"
            required
            class="form-champ border"
          />
        </div>
      </div>
      <div class="sm:col-span-2 sm:col-start-1 mt-4">
        <label for="password">Mot de passe</label>
        <div class="mt-2">
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            autocomplete="none"
            placeholder="Votre mot de passe"
            required
            class="form-champ border"
          />
        </div>
      </div>

      <div v-if="loginMode">
        <div class="text-center mt-6">
          <button
            type="button"
            @click="doLogin"
            class="py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300"
          >
            Se connecter
          </button>

          <div class="text-center mt-6">
            <p class="mb-2 sm:mb-1">Vous n'avez pas de compte ?</p>
            <button type="button" @click="loginMode = false" class="link">S'inscrire</button>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="mt-5 items-center">
          <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required />
          <label for="confidential"
            >J'accepte
            <RouterLink to="/" class="link"
              ><strong>la politique de confidentialité</strong></RouterLink
            ></label
          >
        </div>

        <div class="text-center mt-5 sm:mt-8">
          <button
            type="button"
            @click="doCreateAccount"
            class="py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300"
          >
            S'inscrire
          </button>
        </div>

        <div class="text-center mt-6">
          <p class="mb-2 sm:mb-1">Vous avez déjà un compte ?</p>
          <button type="button" @click="loginMode = true" class="link">Se connecter</button>
        </div>
      </div>
    </div>
  </form>
</template>
