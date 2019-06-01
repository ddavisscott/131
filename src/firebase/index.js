import store from '@/store/store'
import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyD531A8EyY_2yC4LkPCUyVIVAl3l4ctAjg",
  authDomain: "scrum-976b5.firebaseapp.com",
  databaseURL: "https://scrum-976b5.firebaseio.com",
  projectId: "scrum-976b5",
  storageBucket: "scrum-976b5.appspot.com",
  messagingSenderId: "1006006011770",
  appId: "1:1006006011770:web:f6f9d252e83bf280"
}

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(config)
    const auth = firebase.auth()
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return await auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        await auth.signOut()
      }
    }
    auth.onAuthStateChanged(user => {
      store.commit('updateUser',{ user })
      store.dispatch('fetchUserData')
    })
  }
}