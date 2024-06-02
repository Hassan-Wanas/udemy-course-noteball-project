<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column"> {{ dateFormated }} </small>
          <small class="column has-text-right"> {{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
      <a @click="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<script setup>

// imports

import { computed, reactive } from "vue";
import { useDateFormat, useNow } from "@vueuse/core";
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

// date formated

const dateFormated = computed(() => {
  let date = new Date(parseInt(props.note.date))
  const formattedDate = useDateFormat(date, 'YYYY/MM/DD @ HH:mm')
  return formattedDate.value
})

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