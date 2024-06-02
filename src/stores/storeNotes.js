// stores/storeNote.js
import { defineStore } from 'pinia'
import {
  collection, onSnapshot,
  doc, setDoc, deleteDoc, updateDoc,
  query, orderBy
} from "firebase/firestore";
import { db } from "@/JS/Firebase.js";

const notesCollectionRef = collection(db, 'Notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('id', 'desc'));

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
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content
          }
          notes.push(note)
        });
        this.notes = notes
      });
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString()
      
      await setDoc(doc(db, "Notes", id), {
        id,
        content: newNoteContent
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content) {
      //let index = this.notes.findIndex(note => note.id === id)
      //this.notes[index].content = content

      // Set the "capital" field of the city 'DC'

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