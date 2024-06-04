// stores/storeNote.js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from "firebase/auth";
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
          const user = userCredential.user;
          console.log('user: ', user)
        })
        .catch((error) => {
          console.log('error.message: ', error.message) 
        });
    }
  },
})