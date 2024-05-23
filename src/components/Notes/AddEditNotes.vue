<template>
  <div class="container has-background-success-dark p-4 mb-5 box">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Add a new note" ref="newNoteRef" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>