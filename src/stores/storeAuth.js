// stores/storeNote.js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/JS/Firebase';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
      
    }
  },
  actions: {
    registerUser(credentials) {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log('user: ', user)
          })
          .catch((error) => {
            console.log('error.message: ', error.message)
          });
      },
      loginUser(credentials) {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log('user: ', user)
        })
        .catch((error) => {
          console.log('error message: ', error.message)
        });
      },
      logoutUser() {
        signOut(auth).then(() => {
          console.log('user signed out')
        }).catch((error) => {
          console.log(error.message)
        });
      },
    },
})