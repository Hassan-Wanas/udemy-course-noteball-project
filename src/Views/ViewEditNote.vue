<template>
  <div class="edit-note">
    <AddEditNote v-model="noteContent" bgColor="link" placeholder="Edit Note" label="Edit Note" ref="addEditNoteRef">
      <template #buttons>
        <button @click="$router.back" class="button is-link is-light mr-2">Cancel</button>
        <button class="button is-link has-background-link" :disabled="!noteContent">Save Note</button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

// imports
import AddEditNote from '@/components/Notes/AddEditNotes.vue';
import { ref } from 'vue'

// note
const noteContent = ref('')

</script>