<template>
  <div class="container p-4 mb-5 box" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea"
          :placeholder="placeholder" ref="textareaRef" v-autofocus maxlength="100" />
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
import { vAutofocus } from "@/directives/vAutofocus";

// props

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String,
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