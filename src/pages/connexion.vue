<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '@/supabase'
import { useRouter } from 'vue-router'

import BtnComponent from '@/components/BtnComponent.vue';

const router = useRouter()
const loginMode = ref(true)

const email = ref('')
const password = ref('')
const gitText = ref('')

if(loginMode.value) {
  gitText.value = 'Connexion'
} else {
  gitText.value = 'Inscription'
}

// Fonction de connexion
const doLogin = async () => {
  try {
    await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    router.push('/portail')
  } catch (error) {
    alert('Une erreur est survenue lors de la connexion, vérifiez vos identifiants et réessayez.')
    // console.log(error)
  }
}
const doLoginGitHub = async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    router.push('/portail')
  } catch (error) {
    alert('Une erreur est survenue lors de la connexion avec GitHub')
    // console.log(error)
  }
}
// Fonction de création de compte
const doCreateAccount = async () => {
  try {
    await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    alert('Votre compte a été créé avec succès !')
    router.push('/portail')
  } catch (error) {
    // console.log(error)
  }
}

// Redirige l'utilisateur vers le portail client si il est connecté
if (user.value) {
    router.push('/portail')
}
</script>

<template>
  <form @submit.prevent="loginMode ? doLogin() : doCreateAccount()" class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-10 mt-4 sm:mt-8">
    <div>
      <h2 class="text-center text-xl mb-10 uppercase">{{ loginMode ? 'CONNEXION' : 'INSCRIPTION' }}</h2>
      <div class="sm:col-span-2 sm:col-start-1 mt-4">
        <label for="email">Mail</label>
        <div class="mt-2">
          <input v-model="email" type="email" name="email" id="email" autocomplete="email"
            placeholder="Votre adresse mail" required class="form-champ border" />
        </div>
      </div>
      <div class="sm:col-span-2 sm:col-start-1 mt-4">
        <label for="password">Mot de passe</label>
        <div class="mt-2">
          <input v-model="password" type="password" name="password" id="password" autocomplete="none"
            placeholder="Votre mot de passe" required class="form-champ border" />
        </div>
      </div>
      <!-- Se connecter -->
      <div v-if="loginMode">
        <div class="text-center mt-6">
          <div class="sm:flex justify-around">
            <BtnComponent buttonText="Se connecter" stateToggle="doLogin" />
          </div>

          <div class="text-center mt-6">
            <p class="mb-2 sm:mb-1">Vous n'avez pas de compte ?</p>
            <button type="button" @click="loginMode = false" class="link">S'inscrire</button>
          </div>
        </div>
      </div>
      <!-- S'inscrire -->
      <div v-else>
        <div class="mt-5 items-center">
          <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required />
          <label for="confidential">
            J'accepte
            <RouterLink to="/" class="link"><strong>la politique de confidentialité</strong></RouterLink>
          </label>
        </div>

        <div class="sm:flex justify-around">
          <BtnComponent buttonText="S'inscrire" stateToggle="doCreateAccount" />
        </div>


        <div class="text-center mt-6">
          <p class="mb-2 sm:mb-1">Vous avez déjà un compte ?</p>
          <button type="button" @click="loginMode = true" class="link">Se connecter</button>
        </div>
      </div>
    </div>
  </form>
  <div class="text-center">
    <button class="duration-300 hover:shadow-md hover:scale-105 font-semibold border p-2 rounded-lg px-3" @click="doLoginGitHub">{{gitText}} avec GitHub</button>
    </div>
</template>
