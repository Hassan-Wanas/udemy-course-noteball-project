// stores/storeNote.js
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/JS/Firebase';
import { useStoreNotes } from './storeNotes';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
      user: {}
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const storeNotes = useStoreNotes()

          this.user.id = user.uid
          this.user.email = user.email
          this.router.push('/')
          
          storeNotes.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
        }
      });
    },
    registerUser(credentials) {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            const user = userCredential.user
            //console.log('user: ', user)
          })
          .catch((error) => {
            //console.log('error.message: ', error.message)
          });
      },
      loginUser(credentials) {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user
          //console.log('user: ', user)
        })
        .catch((error) => { 
          //console.log('error message: ', error.message)
        });
      },
      logoutUser() {
        signOut(auth).then(() => {
          //console.log('user signed out')
        }).catch((error) => {
          //console.log(error.message)
        });
      },
    },
})