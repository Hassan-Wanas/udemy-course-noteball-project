<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small> {{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
      <a @click="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" />
  </div>
</template>

<script setup>

// imports

import { computed, reactive } from "vue";
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
import { useStoreNotes } from '@/stores/storeNotes.js'


// props

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

// store

const storeNotes = useStoreNotes()

// Character Lenght

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'Characters' : 'Character'
  return `${length} ${description}`
})

// modals

const modals = reactive({
  deleteNote: false
})
</script>