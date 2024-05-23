// stores/storeNote.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        {
          id: 'id1',
          content: 'Longer from note'
        },
        {
          id: 'id2',
          content: 'Shorter form note'
        },
      ]
    }
  },
})