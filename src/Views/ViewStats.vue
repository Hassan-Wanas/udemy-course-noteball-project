<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>State</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>

    <input v-model="loveNoteballs" class="input" type="text" placeholder="Do You Love NoteBalls?" v-autofocus
      maxlength="100">
  </div>
</template>


<script setup>

// imports

import { useStoreNotes } from '@/stores/storeNotes.js'
import { vAutofocus } from "@/directives/vAutofocus.js";
import { useWatchCharacters } from '@/use/UseWatchCharacters.js'
import { ref } from 'vue';



// store

const storeNotes = useStoreNotes()


// love NoteBalls

const loveNoteballs = ref('')

// watch

useWatchCharacters(loveNoteballs)

</script>