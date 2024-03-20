import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

// // Identification user
// const { data } = await supabase.auth.getUser()
// export const user = ref(data.user)
// supabase.auth.onAuthStateChange((evt,session)=>{
//     user.value = session?.user ?? null
// })

async function fetchUserData() {
    try {
      const { data } = await supabase.auth.getUser();
      user.value = ref(data.user);
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
    }
  }
  
  export const user = ref();
  fetchUserData(); // Appel de la fonction pour récupérer les données utilisateur au chargement de l'application

  supabase.auth.onAuthStateChange((evt, session) => {
    user.value = session?.user ?? null;
  });