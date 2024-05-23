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
      <a @click="storeNotes.deleteNote(note.id)" href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>

// imports

import { computed } from "vue";
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

</script>