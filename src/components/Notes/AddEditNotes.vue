<template>
  <div class="container has-background-success-dark p-4 mb-5 box">
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea"
          placeholder="Add a new note" ref="textareaRef" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// props

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

// focus TextArea

const textareaRef = ref(null)

const focusTextArea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextArea
})
</script>