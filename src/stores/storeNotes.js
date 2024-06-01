// stores/storeNote.js
import { defineStore } from 'pinia'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/JS/Firebase.js";

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
      ]
    }
  },

  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, "Notes"));
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content
        }
        this.notes.push(note)
      });
    },
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          id = currentDate.toString()

      let note = {
        id,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter(note => { return note.id !== idToDelete })
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content
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