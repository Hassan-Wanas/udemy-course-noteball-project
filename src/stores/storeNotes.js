// stores/storeNote.js
import { defineStore } from 'pinia'
import {
  collection, onSnapshot,
  doc, deleteDoc, updateDoc, addDoc,
  query, orderBy
} from "firebase/firestore";
import { db } from "@/JS/Firebase.js";
import { useStoreAuth } from "@/stores/storeAuth";


let notesCollectionRef
let notesCollectionQuery

let getNotesSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        /*
        {
          id: 'id1',
          content: 'Longer from note'
        },
        {
          id: 'id2',
          content: 'Shorter form note'
        },
        */
      ],
      notesLoaded: false
    }
  },

  actions: {
    init() {
      const storeAuth = useStoreAuth()

      notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes')
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));
      
      this.getNotes()
    },
    async getNotes() {
      this.notesLoaded = false
      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        })
          this.notes = notes
          this.notesLoaded = true
      });
    },
    clearNotes() {
      this.notes = []
      if (getNotesSnapshot) getNotesSnapshot()
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString()
      
      await addDoc(notesCollectionRef, {
        date,
        content: newNoteContent
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content
      });

    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => {return note.id === id})[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      });
      return count
    }
  }
})