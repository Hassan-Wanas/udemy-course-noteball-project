<template>
  <div ref="deleteModalRef" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note ?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note ?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button @click="closeModal" class="button">Cancel</button>
          <button class="button is-danger">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>

// imports

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

// props

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// emits

const emits = defineEmits(['update:modelValue'])

// close modal

const closeModal = () => {
  emits('update:modelValue', false)
}

// click outside to close

const deleteModalRef = ref(null)

onClickOutside(deleteModalRef, () => {
  emits('update:modelValue', false)
})
</script>