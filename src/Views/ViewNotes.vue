<template>
  <div class="notes">

    <AddEditNote v-model="newNote" ref="addEditNoteRef" placeholder="Add a new note">
      <template #buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New
          Note</button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>

// imports

import { ref, watch } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNotes.vue'
import { useStoreNotes } from '@/stores/storeNotes.js'

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

watch(newNote, (newValue) => {
  if (newValue.length === 100) {
    alert('Only 100 Characters Allowed')
  }
})
</script>