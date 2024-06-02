<template>
  <div class="notes">

    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New
          Note</button>
      </template>
    </AddEditNote>
    
    <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100" />

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </template>
  </div>
</template>

<script setup>

// imports

import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNotes.vue'
import { useStoreNotes } from '@/stores/storeNotes.js'
import { useWatchCharacters } from '@/use/UseWatchCharacters'

// store

const storeNotes = useStoreNotes()

// notes

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextArea()
}

// watch characters

useWatchCharacters(newNote, 100)

/*
watch(newNote, (newValue) => {
  if (newValue.length === 100) {
    alert('Only 100 Characters Allowed')
  }
})
 */
</script>