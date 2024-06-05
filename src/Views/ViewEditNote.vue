<template>
  <div class="edit-note">
    <AddEditNote v-model="noteContent" bgColor="link" placeholder="Edit Note" label="Edit Note" ref="addEditNoteRef">
      <template #buttons>
        <button @click="$router.back" class="button is-link is-light mr-2">Cancel</button>
        <button class="button is-link has-background-link" :disabled="!noteContent" @click="handleSaveButton">Save
          Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

// imports
import AddEditNote from '@/components/Notes/AddEditNotes.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes';

// router

const route = useRoute()
const router = useRouter()

// store

const storeNotes = useStoreNotes()

// note

const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

// save clicked

const handleSaveButton = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  // add .value to the noteContent fixes the updateNote problem in storeNotes.js
  router.push('/')
}

</script>