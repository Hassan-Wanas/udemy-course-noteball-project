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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>

// imports

import { computed } from "vue";

// props

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

// Character Lenght

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'Characters' : 'Character'
  return `${length} ${description}`
})

</script>